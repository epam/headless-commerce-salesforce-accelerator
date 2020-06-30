/*
 * Copyright 2020 EPAM Systems, Inc. (https://www.epam.com/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
 * Set search configuration values
 *
 * @param {dw.catalog.ProductSearchModel} apiProductSearch - API search instance
 * @param {Object} params - Provided HTTP query parameters
 * @return {dw.catalog.ProductSearchModel} - API search instance
 */
function setupSearch(apiProductSearch, params) {
    var CatalogMgr = require('dw/catalog/CatalogMgr');
    var searchModelHelper = require('*/cartridge/scripts/search/search');

    var sortingRule = params.srule ? CatalogMgr.getSortingRule(params.srule) : null;
    var selectedCategory = CatalogMgr.getCategory(params.cgid);
    selectedCategory = selectedCategory && selectedCategory.online ? selectedCategory : null;

    searchModelHelper.setProductProperties(apiProductSearch, params, selectedCategory, sortingRule);

    if (params.preferences) {
        searchModelHelper.addRefinementValues(apiProductSearch, params.preferences);
    }

    return apiProductSearch;
}

/**
 * Retrieve a category's template filepath if available
 *
 * @param {dw.catalog.ProductSearchModel} apiProductSearch - API search instance
 * @return {string} - Category's template filepath
 */
function getCategoryTemplate(apiProductSearch) {
    return apiProductSearch.category ? apiProductSearch.category.template : '';
}

/**
 * Set content search configuration values
 *
 * @param {Object} params - Provided HTTP query parameters
 * @return {Object} - content search instance
 */
function setupContentSearch(params) {
    var ContentSearchModel = require('dw/content/ContentSearchModel');
    var ContentSearch = require('*/cartridge/models/search/contentSearch');
    var apiContentSearchModel = new ContentSearchModel();

    apiContentSearchModel.setRecursiveFolderSearch(true);
    apiContentSearchModel.setSearchPhrase(params.q);
    apiContentSearchModel.search();
    var contentSearchResult = apiContentSearchModel.getContent();
    var count = Number(apiContentSearchModel.getCount());
    var contentSearch = new ContentSearch(contentSearchResult, count, params.q, params.startingPage, null);

    return contentSearch;
}

/**
 * Set the cache values
 *
 * @param {Object} res - The response object
 */
function applyCache(res) {
    res.cachePeriod = 1; // eslint-disable-line no-param-reassign
    res.cachePeriodUnit = 'hours'; // eslint-disable-line no-param-reassign
    res.personalized = true; // eslint-disable-line no-param-reassign
}

/**
 * performs a search
 *
 * @param {Object} req - Provided HTTP query parameters
 * @param {Object} res - Provided HTTP query parameters
 * @return {Object} - an object with relevant search information
 */
function search(req, res) {
    var CatalogMgr = require('dw/catalog/CatalogMgr');
    var URLUtils = require('dw/web/URLUtils');
    var ProductSearchModel = require('dw/catalog/ProductSearchModel');

    var pageMetaHelper = require('*/cartridge/scripts/helpers/pageMetaHelper');
    var ProductSearch = require('*/cartridge/models/search/productSearch');
    var reportingUrlsHelper = require('*/cartridge/scripts/reportingUrls');

    var categoryTemplate = '';
    var maxSlots = 4;
    var productSearch;
    var reportingURLs;

    var apiProductSearch = res.getViewData().apiProductSearch;
    if (!apiProductSearch) {
        apiProductSearch = new ProductSearchModel();
    }

    var searchRedirect = req.querystring.q ? apiProductSearch.getSearchRedirect(req.querystring.q) : null;

    if (searchRedirect) {
        return {searchRedirect: searchRedirect.getLocation()};
    }

    apiProductSearch = setupSearch(apiProductSearch, req.querystring);
    apiProductSearch.search();

    if (!apiProductSearch.personalizedSort) {
        applyCache(res);
    }
    categoryTemplate = getCategoryTemplate(apiProductSearch);
    productSearch = new ProductSearch(
        apiProductSearch,
        req.querystring,
        req.querystring.srule,
        CatalogMgr.getSortingOptions(),
        CatalogMgr.getSiteCatalog().getRoot()
    );

    pageMetaHelper.setPageMetaTags(req.pageMetaData, productSearch);

    var refineurl = URLUtils.url('Search-Refinebar');
    var whitelistedParams = ['q', 'cgid', 'pmin', 'pmax', 'srule'];
    var isRefinedSearch = false;

    Object.keys(req.querystring).forEach(function (element) {
        if (whitelistedParams.indexOf(element) > -1) {
            refineurl.append(element, req.querystring[element]);
        }

        if (['pmin', 'pmax'].indexOf(element) > -1) {
            isRefinedSearch = true;
        }

        if (element === 'preferences') {
            var i = 1;
            isRefinedSearch = true;
            Object.keys(req.querystring[element]).forEach(function (preference) {
                refineurl.append('prefn' + i, preference);
                refineurl.append('prefv' + i, req.querystring[element][preference]);
                i++;
            });
        }
    });

    if (productSearch.searchKeywords !== null && !isRefinedSearch) {
        reportingURLs = reportingUrlsHelper.getProductSearchReportingURLs(productSearch);
    }
    delete productSearch.productSort;
    delete productSearch.productSearch;
    delete productSearch.showMoreUrl;
    delete productSearch.pageMetaTags;
    delete productSearch.resetLink;
    delete productSearch.bannerImageUrl;
    var result = {
        productSearch: productSearch,
        maxSlots: maxSlots,
        reportingURLs: reportingURLs,
        refineurl: refineurl
    };

    if (productSearch.isCategorySearch && !productSearch.isRefinedCategorySearch
        && categoryTemplate
        && apiProductSearch.category.parent.ID === 'root') {
        pageMetaHelper.setPageMetaData(req.pageMetaData, productSearch.category);
        result.category = apiProductSearch.category;
        result.categoryTemplate = categoryTemplate;
    }

    return result;
}

exports.setupSearch = setupSearch;
exports.getCategoryTemplate = getCategoryTemplate;
exports.setupContentSearch = setupContentSearch;
exports.search = search;
exports.applyCache = applyCache;
