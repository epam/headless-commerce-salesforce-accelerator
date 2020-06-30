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

server.append('Show', function (req, res, next) {
    var Resource = require('dw/web/Resource');
    var viewData = res.getViewData();
    viewData.resources = {
        startingFrom: Resource.msg('label.starting_from', 'pricing', null)
    };
    res.setViewData(viewData);
    res.json();
    next();
});

module.exports = server.exports();
