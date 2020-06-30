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
var urlHelper = require('*/cartridge/scripts/helpers/urlHelpers');

/**
 * @typedef {Object} ProductOptionValues
 * @type Object
 * @property {string} id - Product option value ID
 * @property {string} displayValue - Option value's display value
 * @property {string} price - Option values' price
 */

/**
 * Get a product option's values
 *
 * @param {dw.catalog.ProductOptionModel} optionModel - A product's option model
 * @param {dw.catalog.ProductOption} option - A product's option
 * @param {dw.util.Collection<dw.catalog.ProductOptionValue>} optionValues - Product option values
 * @param {Object} attributeVariables - Variation attribute query params
 * @return {ProductOptionValues} - View model for a product option's values
 */
function getOptionValues(optionModel, option, optionValues, attributeVariables) {
    var action = 'Product-Variation';
    var values = collections.map(optionValues, function (value) {
        var priceValue = optionModel.getPrice(value);
        var optionUrl = optionModel.urlSelectOptionValue(action, option, value);
        var url = urlHelper.appendQueryParams(optionUrl, attributeVariables);
        return {
            id: value.ID,
            displayValue: value.displayValue,
            price: priceValue.toFormattedString(),
            priceValue: priceValue.decimalValue,
            url: url
        };
    });

    return values.sort(function (a, b) {
        return a.priceValue - b.priceValue;
    });
}

/**
 * @typedef {Object} ProductOptions
 *
 * @property {string} id - Product option ID
 * @property {string} name - Product option name
 * @property {string} htmlName - HTML representation of product option name
 * @property {ProductOptionValues} values - A product option's values
 * @property {string} selectedValueId - Selected option value ID
 */

/**
 * Retrieve provided product's options
 *
 * @param {dw.catalog.ProductOptionModel} optionModel - Product's option model
 * @param {Object} attributeVariables - Variation attribute query params
 * @return {ProductOptions[]} - Parsed options for this product
 */
function getOptions(optionModel, attributeVariables) {
    return collections.map(optionModel.options, function (option) {
        return {
            id: option.ID,
            name: option.displayName,
            htmlName: option.htmlName,
            values: getOptionValues(optionModel, option, option.optionValues, attributeVariables),
            selectedValueId: optionModel.getSelectedOptionValue(option).ID
        };
    });
}

/**
 * @typedef SelectedOption
 * @type Object
 * @property {string} optionId - Product option ID
 * @property {string} productId - Product ID
 * @property {string} selectedValueId - Selected product option value ID
 */

/**
 * Provides a current option model by setting selected option values
 *
 * @param {dw.catalog.ProductOptionModel} optionModel - Product's option model
 * @param {SelectedOption[]} selectedOptions - Options selected in UI
 * @return {dw.catalog.ProductOptionModel} - Option model updated with selected options
 */
function getCurrentOptionModel(optionModel, selectedOptions) {
    var productOptions = optionModel.options;
    var selectedValue;
    var selectedValueId;

    if (selectedOptions && selectedOptions.length) {
        collections.forEach(productOptions, function (option) {
            selectedValueId = selectedOptions.filter(function (selectedOption) {
                return selectedOption.optionId === option.ID;
            })[0].selectedValueId;
            selectedValue = optionModel.getOptionValue(option, selectedValueId);
            optionModel.setSelectedOptionValue(option, selectedValue);
        });
    }

    return optionModel;
}

/**
 * Generates a URL with the currently selected product options
 *
 * @param {dw.catalog.ProductOptionModel} optionModel - The product's option model
 * @param {string} [action] - URL endpoint
 * @return {string} - URL with option query params
 */
function getSelectedOptionsUrl(optionModel, action) {
    var actionEndpoint = action || 'Product-Variation';
    var options = optionModel.options;
    if (!options.length) {
        return '';
    }
    var option = options[0];
    var value = optionModel.getSelectedOptionValue(option);
    // Getting the selected option value URL for one selected option results in a URL that specifies
    // all selected options
    return optionModel.urlSelectOptionValue(actionEndpoint, option, value).toString();
}

/**
 * Return type of the current product
 * @param  {dw.catalog.ProductVariationModel} product - Current product
 * @return {string} type of the current product
 */
function getProductType(product) {
    var result;
    if (product.master) {
        result = 'master';
    } else if (product.variant) {
        result = 'variant';
    } else if (product.variationGroup) {
        result = 'variationGroup';
    } else if (product.productSet) {
        result = 'set';
    } else if (product.bundle) {
        result = 'bundle';
    } else if (product.optionProduct) {
        result = 'optionProduct';
    } else {
        result = 'standard';
    }
    return result;
}

/**
 * Normalize product and return Product variation model
 * @param  {dw.catalog.Product} product - Product instance returned from the API
 * @param  {Object} productVariables - variables passed in the query string to
 *                                     target product variation group
 * @return {dw.catalog.ProductVarationModel} Normalized variation model
 */
function getVariationModel(product, productVariables) {
    var variationModel = product.variationModel;
    if (!variationModel.master && !variationModel.selectedVariant) {
        variationModel = null;
    } else if (productVariables) {
        var variationAttrs = variationModel.productVariationAttributes;
        Object.keys(productVariables).forEach(function (attr) {
            if (attr && productVariables[attr].value) {
                var dwAttr = collections.find(variationAttrs,
                    function (item) {
                        return item.ID === attr;
                    });
                var dwAttrValue = collections.find(variationModel.getAllValues(dwAttr),
                    function (item) {
                        return item.value === productVariables[attr].value;
                    });
                if (dwAttr && dwAttrValue) {
                    variationModel.setSelectedAttributeValue(dwAttr.ID, dwAttrValue.ID);
                }
            }
        });
    }
    return variationModel;
}

/**
 * If a product is master and only have one variant for a given attribute - auto select it
 * @param {dw.catalog.Product} apiProduct - Product from the API
 * @param {Object} params - Parameters passed by querystring
 *
 * @returns {Object} - Object with selected parameters
 */
function normalizeSelectedAttributes(apiProduct, params) {
    if (!apiProduct.master) {
        return params.variables;
    }

    var variables = params.variables || {};
    if (apiProduct.variationModel) {
        collections.forEach(apiProduct.variationModel.productVariationAttributes, function (attribute) {
            var allValues = apiProduct.variationModel.getAllValues(attribute);
            if (allValues.length === 1) {
                variables[attribute.ID] = {
                    id: apiProduct.ID,
                    value: allValues.get(0).ID
                };
            }
        });
    }

    return Object.keys(variables) ? variables : null;
}

/**
 * Get information for model creation
 * @param {dw.catalog.Product} apiProduct - Product from the API
 * @param {Object} params - Parameters passed by querystring
 *
 * @returns {Object} - Config object
 */
function getConfig(apiProduct, params) {
    var variables = normalizeSelectedAttributes(apiProduct, params);
    var variationModel = getVariationModel(apiProduct, variables);
    if (variationModel) {
        apiProduct = variationModel.selectedVariant || apiProduct; // eslint-disable-line
    }
    var PromotionMgr = require('dw/campaign/PromotionMgr');
    var promotions = PromotionMgr.activeCustomerPromotions.getProductPromotions(apiProduct);
    var optionsModel = getCurrentOptionModel(apiProduct.optionModel, params.options);
    var options = {
        variationModel: variationModel,
        options: params.options,
        optionModel: optionsModel,
        promotions: promotions,
        quantity: params.quantity,
        variables: variables,
        apiProduct: apiProduct,
        productType: getProductType(apiProduct)
    };

    return options;
}

/**
 * Retrieve product's options and default selected values from product line item
 *
 * @param {dw.util.Collection<dw.order.ProductLineItem>} optionProductLineItems - Option product
 *     line items
 * @param {string} productId - Line item product ID
 * @return {string[]} - Product line item options
 */
function getLineItemOptions(optionProductLineItems, productId) {
    return collections.map(optionProductLineItems, function (item) {
        return {
            productId: productId,
            optionId: item.optionID,
            selectedValueId: item.optionValueID
        };
    });
}

/**
 * Retrieve product's options and default values
 *
 * @param {dw.catalog.ProductOptionModel} optionModel - A product's option model
 * @param {dw.util.Collection<dw.catalog.ProductOption>} options - A product's configured options
 * @return {string[]} - Product line item options
 */
function getDefaultOptions(optionModel, options) {
    return collections.map(options, function (option) {
        var selectedValue = optionModel.getSelectedOptionValue(option);
        return option.displayName + ': ' + selectedValue.displayValue;
    });
}

/**
 * Retrieve product's options default selected values, id and name from product line item
 *
 * @param {dw.util.Collection<dw.order.ProductLineItem>} optionProductLineItems - Option product
 *     line items
 * @return {string[]} - Product line item option display values, id and name
 */
function getLineItemOptionNames(optionProductLineItems) {
    return collections.map(optionProductLineItems, function (item) {
        return {
            displayName: item.productName,
            optionId: item.optionID,
            selectedValueId: item.optionValueID
        };
    });
}

/**
 * Creates the breadcrumbs object
 * @param {string} cgid - category ID from navigation and search
 * @param {string} pid - product ID
 * @param {Array} breadcrumbs - array of breadcrumbs object
 * @returns {Array} an array of breadcrumb objects
 */
function getAllBreadcrumbs(cgid, pid, breadcrumbs) {
    var CatalogMgr = require('dw/catalog/CatalogMgr');
    var ProductMgr = require('dw/catalog/ProductMgr');
    var category;
    var product;

    if (pid) {
        product = ProductMgr.getProduct(pid);
        category = product.variant
            ? product.masterProduct.primaryCategory
            : product.primaryCategory;

        breadcrumbs.push({
            htmlValue: product.getName(),
            pid: pid
        });
    } else if (cgid) {
        category = CatalogMgr.getCategory(cgid);
    }

    if (category) {
        breadcrumbs.push({
            htmlValue: category.displayName,
            cgid: category.ID,
            isPLP: !!category.custom.isPLP
        });

        if (category.parent && category.parent.ID !== 'root') {
            return getAllBreadcrumbs(category.parent.ID, null, breadcrumbs);
        }
    }

    return breadcrumbs;
}

/**
 * Generates a map of string resources for the template
 *
 * @returns {ProductDetailPageResourceMap} - String resource map
 */
function getResources() {
    var Resource = require('dw/web/Resource');

    return {
        info_selectforstock: Resource.msg('info.selectforstock', 'product',
            'Select Styles for Availability'),
        assistiveSelectedText: Resource.msg('msg.assistive.selected.text', 'common', null)
    };
}

/**
 * Renders the Product Details Page
 * @param {Object} querystring - query string parameters
 * @param {Object} reqPageMetaData - request pageMetaData object
 * @returns {Object} contain information needed to render the product page
 */
function showProductPage(querystring, reqPageMetaData) {
    var URLUtils = require('dw/web/URLUtils');
    var ProductFactory = require('*/cartridge/scripts/factories/product');
    var pageMetaHelper = require('*/cartridge/scripts/helpers/pageMetaHelper');

    var params = querystring;
    var product = ProductFactory.get(params);
    var addToCartUrl = URLUtils.url('Cart-AddProduct');
    var canonicalUrl = URLUtils.url('Product-Show', 'pid', product.id);
    var breadcrumbs = getAllBreadcrumbs(null, product.id, []);
    var template = 'product/productDetails';

    if (product.productType === 'bundle' && !product.template) {
        template = 'product/bundleDetails';
    } else if (product.productType === 'set' && !product.template) {
        template = 'product/setDetails';
    } else if (product.template) {
        template = product.template;
    }

    pageMetaHelper.setPageMetaData(reqPageMetaData, product);
    pageMetaHelper.setPageMetaTags(reqPageMetaData, product);
    var schemaData = require('*/cartridge/scripts/helpers/structuredDataHelper').getProductSchema(product);

    return {
        template: template,
        product: product,
        addToCartUrl: addToCartUrl,
        resources: getResources(),
        breadcrumbs: breadcrumbs,
        canonicalUrl: canonicalUrl,
        schemaData: schemaData
    };
}

module.exports = {
    getOptionValues: getOptionValues,
    getOptions: getOptions,
    getCurrentOptionModel: getCurrentOptionModel,
    getSelectedOptionsUrl: getSelectedOptionsUrl,
    getProductType: getProductType,
    getVariationModel: getVariationModel,
    getConfig: getConfig,
    getLineItemOptions: getLineItemOptions,
    getDefaultOptions: getDefaultOptions,
    getLineItemOptionNames: getLineItemOptionNames,
    showProductPage: showProductPage,
    getAllBreadcrumbs: getAllBreadcrumbs,
    getResources: getResources
};
