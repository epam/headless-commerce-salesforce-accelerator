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

var server = require('server');
var page = module.superModule;
server.extend(page);
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
var pageMetaData = require('*/cartridge/scripts/middleware/pageMetaData');
var cache = require('*/cartridge/scripts/middleware/cache');

server.append(
    'Refinebar',
    cache.applyDefaultCache,
    function (req, res, next) {
        var Resource = require('dw/web/Resource');
        var viewData = res.getViewData();
        var refinements = viewData.productSearch.refinements;
        delete viewData.productSearch;
        viewData.refinements = refinements;
        viewData.resources = {
            selectedFilters: Resource.msg('label.selectedfilters', 'search', null),
            resetAll: Resource.msg('link.resetall', 'search', null)
        };
        res.setViewData(viewData);
        res.json();

        next();
    },
    pageMetaData.computedPageMetaData
);

server.append(
    'Show',
    cache.applyShortPromotionSensitiveCache,
    consentTracking.consent,
    function (req, res, next) {
        this.on('route:BeforeComplete', function () {
            var searchHelper = require('*/cartridge/scripts/helpers/searchHelpers');
            var productHelper = require('*/cartridge/scripts/helpers/productHelpers');
            var breadcrumbs = [];

            var cgid = req.querystring.cgid;
            var result = searchHelper.search(req, res);
            result.breadcrumbs = productHelper.getAllBreadcrumbs(
                cgid,
                null,
                breadcrumbs
            );
            var viewData = result;
            res.setViewData(viewData);
            res.json();
        });
        next();
    },
    pageMetaData.computedPageMetaData
);

module.exports = server.exports();
