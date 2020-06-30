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
var csrfProtection = require('*/cartridge/scripts/middleware/csrf');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');

server.get(
    'Show',
    consentTracking.consent,
    server.middleware.https,
    csrfProtection.generateToken,
    function (req, res, next) {
        var Resource = require('dw/web/Resource');
        var viewData = {};
        var loginForm = server.forms.getForm('login');
        viewData.loginForm = loginForm;
        viewData.resources = {
            checkout: Resource.msg('title.checkout', 'checkout', null),
            login: Resource.msg('link.header.login', 'account', null),
            guestCheckoutTitle: Resource.msg('heading.guest.checkout', 'checkout', null),
            guestCheckoutCTA: Resource.msg('button.checkout.as.guest', 'checkout', null),
            guestCheckoutNotice: Resource.msg('msg.guest.checkout1', 'checkout', null) +
                ' ' + Resource.msg('msg.guest.checkout2', 'checkout', null),
            returningCustomers: Resource.msg('heading.returning.customers', 'checkout', null)
        };
        loginForm.clear();
        res.setViewData(viewData);
        res.json();
        next();
    }
);

module.exports = server.exports();
