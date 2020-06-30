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

var Resource = require('dw/web/Resource');

var cartResources = {
    cancel: Resource.msg('button.cancel', 'cart', null),
    cartCountOfItems: Resource.msg('label.number.items.in.cart', 'cart', null),
    cartRemoveProduct: Resource.msg('heading.remove.product.confirmation.modal', 'cart', null),
    cartRemoveProductConfirmation: Resource.msg('msg.remove.product.confirmation.modal', 'cart', null),
    checkout: Resource.msg('button.checkout', 'cart', null),
    each: Resource.msg('label.each.item.price', 'cart', null),
    emptyCartMsg: Resource.msg('info.cart.empty.msg', 'cart', null),
    inStock: Resource.msg('label.instock', 'common', null),
    miniCartHeading: Resource.msg('title.your.shopping.cart', 'cart', null),
    miniCartViewMainCart: Resource.msg('link.view.cart', 'cart', null),
    quantity: Resource.msg('field.selectquantity', 'cart', null),
    total: Resource.msg('label.total.price', 'cart', null),
    yes: Resource.msg('button.confirm', 'cart', null),
    subTotal: Resource.msg('label.total.subtotal', 'cart', null),
    estimatedTotal: Resource.msg('label.estimatedtotal', 'cart', null),
    shippingCost: Resource.msg('label.shipping.cost', 'cart', null),
    tax: Resource.msg('label.sales.tax', 'cart', null),
    remove: Resource.msg('link.remove', 'search', null)
};

server.append('Show', function (req, res, next) {
    var URLUtils = require('dw/web/URLUtils');
    var viewData = res.getViewData();
    viewData.resources = cartResources;
    res.setViewData(viewData);
    res.json({
        navigationUrls: {
            mainCartUrl: URLUtils.url('Cart-Show').toString(),
            checkoutUrl: URLUtils.url('Checkout-Login').toString(),
            continueShopping: URLUtils.url('Home-Show').toString()
        }
    });
    next();
}, pageMetaData.computedPageMetaData);

server.append('MiniCartShow', function (req, res, next) {
    var URLUtils = require('dw/web/URLUtils');
    var viewData = res.getViewData();
    viewData.resources = cartResources;
    res.setViewData(viewData);
    res.json({
        navigationUrls: {
            mainCartUrl: URLUtils.url('Cart-Show').toString(),
            checkoutUrl: URLUtils.url('Checkout-Login').toString()
        }
    });
    next();
}, pageMetaData.computedPageMetaData);

server.append('UpdateQuantity', function (req, res, next) {
    var viewData = res.getViewData();
    viewData.resources = cartResources;
    res.setViewData(viewData);
    res.json();
    next();
}, pageMetaData.computedPageMetaData);

server.append('RemoveProductLineItem', function (req, res, next) {
    var viewData = res.getViewData();
    viewData.basket.resources = cartResources;
    res.setViewData(viewData);
    res.json();
    next();
}, pageMetaData.computedPageMetaData);

server.append('SelectShippingMethod', function (req, res, next) {
    var viewData = res.getViewData();
    viewData.resources = cartResources;
    res.setViewData(viewData);
    res.json();
    next();
}, pageMetaData.computedPageMetaData);

server.append('AddProduct', function (req, res, next) {
    var viewData = res.getViewData();
    viewData.cart.resources = cartResources;
    res.setViewData(viewData);
    res.json();
    next();
}, pageMetaData.computedPageMetaData);

server.append('EditProductLineItem', function (req, res, next) {
    var viewData = res.getViewData();
    viewData.resources = cartResources;
    res.setViewData(viewData);
    res.json();
    next();
}, pageMetaData.computedPageMetaData);

module.exports = server.exports();
