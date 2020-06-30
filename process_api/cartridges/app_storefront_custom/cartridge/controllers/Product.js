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
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
var pageMetaData = require('*/cartridge/scripts/middleware/pageMetaData');
var page = module.superModule;
server.extend(page);

var Resource = require('dw/web/Resource');

var productDetailsResources = {
    info_selectforstock: Resource.msg('info.selectforstock', 'product', null),
    assistiveSelectedText: Resource.msg('msg.assistive.selected.text', 'common', null),
    availability: Resource.msg('label.availability', 'common', null),
    addToCart: Resource.msg('button.addtocart', 'common', null),
    attributes: Resource.msg('label.attributes', 'product', null),
    description: Resource.msg('label.description', 'product', null),
    details: Resource.msg('label.details', 'product', null),
    itemNumber: Resource.msg('label.item', 'product', null),
    productAddedToCart: Resource.msg('text.alert.addedtobasket', 'product', null),
    quantity: Resource.msg('label.quantity', 'common', null),
    selectColor: Resource.msg('label.selectColor', 'product', null),
    selectSize: Resource.msg('label.selectSize', 'product', null),
    startingFrom: Resource.msg('label.starting_from', 'pricing', null),
    size: Resource.msg('label.size', 'product', null),
    color: Resource.msg('label.color', 'product', null),
    sizeChart: Resource.msg('link.size_chart', 'product', null),
    select: Resource.msg('label.select', 'common', null),
    errorMsg: Resource.msg('label.errorMsg', 'product', null)
};

server.append('Show', cache.applyPromotionSensitiveCache, consentTracking.consent, function (req, res, next) {
    var viewData = res.getViewData();
    viewData.resources = productDetailsResources;
    res.setViewData(viewData);
    res.json();
    next();
}, pageMetaData.computedPageMetaData);

server.append('Variation', function (req, res, next) {
    var viewData = res.getViewData();
    viewData.resources = productDetailsResources;
    res.setViewData(viewData);
    res.json();
    next();
});

module.exports = server.exports();
