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

server.append('Begin', function (req, res, next) {
    var Resource = require('dw/web/Resource');
    var URLUtils = require('dw/web/URLUtils');
    var viewData = res.getViewData();
    viewData.order.resources.summary = Resource.msg('heading.order.summary', 'checkout', null);
    viewData.order.resources.subTotal = Resource.msg('label.total.subtotal', 'cart', null);
    viewData.order.resources.shippingCost = Resource.msg('label.shipping.cost', 'cart', null);
    viewData.order.resources.tax = Resource.msg('label.sales.tax', 'cart', null);
    viewData.order.resources.estimatedTotal = Resource.msg('label.estimatedtotal', 'cart', null);
    viewData.order.resources.giftMessage = Resource.msg('label.input.giftmessage', 'forms', null);
    viewData.order.resources.checkGift = Resource.msg('check.gift', 'checkout', null);
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
