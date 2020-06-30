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
var pageMetaData = require('*/cartridge/scripts/middleware/pageMetaData');
var page = module.superModule;
server.extend(page);

server.append('SubmitShipping', function (req, res, next) {
    this.on('route:BeforeComplete', function () {
        var Resource = require('dw/web/Resource');
        var URLUtils = require('dw/web/URLUtils');
        var viewData = res.getViewData();
        if ('order' in viewData) {
            viewData.order.resources.summary = Resource.msg('heading.order.summary', 'checkout', null);
        }
        res.setViewData(viewData);
        res.json({
            navigationUrls: {
                cart: URLUtils.url('Cart-Show').toString(),
                payment: URLUtils.url('Checkout-Begin', 'stage', 'payment#payment').toString()
            }
        });
    });
    next();
}, pageMetaData.computedPageMetaData);

server.append('UpdateShippingMethodsList', function (req, res, next) {
    var Resource = require('dw/web/Resource');
    var URLUtils = require('dw/web/URLUtils');
    var viewData = res.getViewData();

    viewData.order.resources.summary = Resource.msg('heading.order.summary', 'checkout', null);
    res.setViewData(viewData);
    res.json({
        navigationUrls: {
            cart: URLUtils.url('Cart-Show').toString(),
            payment: URLUtils.url('Checkout-Begin', 'stage', 'payment#payment').toString()
        }
    });

    next();
}, pageMetaData.computedPageMetaData);
module.exports = server.exports();