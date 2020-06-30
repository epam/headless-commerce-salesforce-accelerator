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
var cache = require('*/cartridge/scripts/middleware/cache');
var page = module.superModule;
server.extend(page);

server.get('MeganavJSON', cache.applyDefaultCache, function (req, res, next) {
    var catalogMgr = require('dw/catalog/CatalogMgr');
    var Categories = require('*/cartridge/models/categories');
    var siteRootCategory = catalogMgr.getSiteCatalog().getRoot();

    var topLevelCategories = siteRootCategory.hasOnlineSubCategories()
        ? siteRootCategory.getOnlineSubCategories()
        : null;

    res.json({
        categories: new Categories(topLevelCategories).categories
    });

    next();
});

module.exports = server.exports();
