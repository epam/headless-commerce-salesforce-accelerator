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

var collections = require('*/cartridge/scripts/util/collections');
var URLUtils = require('dw/web/URLUtils');

/**
 * Get category url
 * @param {dw.catalog.Category} category - Current category
 * @returns {string} - Url of the category
 */
function getCategoryUrl(category) {
    return category.custom && 'alternativeUrl' in category.custom && category.custom.alternativeUrl
        ? (category.custom.alternativeUrl.toString()).replace(/&amp;/g, '&')
        : URLUtils.url('Search-Show', 'cgid', category.getID()).toString();
}

/**
 * Converts a given category from dw.catalog.Category to plain object
 * @param {dw.catalog.Category} category - A single category
 * @returns {Object} plain object that represents a category
 */
function categoryToObject(category) {
    if (!category.custom || !category.custom.showInMenu) {
        return null;
    }
    var result = {
        name: category.getDisplayName(),
        url: getCategoryUrl(category),
        id: category.ID,
        isPLP: category.custom && category.custom.isPLP
    };
    var subCategories = category.hasOnlineSubCategories() ?
        category.getOnlineSubCategories() : null;

    if (subCategories) {
        collections.forEach(subCategories, function (subcategory) {
            var converted = null;
            if (subcategory.hasOnlineProducts() || subcategory.hasOnlineSubCategories()) {
                converted = categoryToObject(subcategory);
            }
            if (converted) {
                if (!result.subCategories) {
                    result.subCategories = [];
                }
                result.subCategories.push(converted);
            }
        });
        if (result.subCategories) {
            result.complexSubCategories = result.subCategories.some(function (item) {
                return !!item.subCategories;
            });
        }
    }

    return result;
}

/**
 * Represents a single category with all of it's children
 * @param {dw.util.ArrayList<dw.catalog.Category>} items - Top level categories
 * @constructor
 */
function categories(items) {
    this.categories = [];
    collections.forEach(items, function (item) {
        if (item.custom && item.custom.showInMenu &&
                (item.hasOnlineProducts() || item.hasOnlineSubCategories())) {
            this.categories.push(categoryToObject(item));
        }
    }, this);
}

module.exports = categories;
