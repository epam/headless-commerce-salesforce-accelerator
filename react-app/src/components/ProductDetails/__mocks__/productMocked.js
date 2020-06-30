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

const productMocked = {
  product: {
    uuid: "50b009e6dba281cf14a98ac7a5",
    id: "25519274M",
    productName: "3/4 Sleeve V-Neck Top",
    productType: "master",
    brand: null,
    price: {
      sales: {
        value: 29,
        currency: "USD",
        formatted: "$29.00",
        decimalPrice: "29.00",
      },
      list: null,
    },
    images: {
      large: [
        {
          alt: "3/4 Sleeve V-Neck Top, , large",
          url:
            "/on/demandware.static/-/Sites-apparel-m-catalog/default/dw6eda398f/images/large/PG.10221706.JJ0DCXX.PZ.jpg",
          index: "0",
          title: "3/4 Sleeve V-Neck Top, ",
          absURL:
            "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.static/-/Sites-apparel-m-catalog/default/dw6eda398f/images/large/PG.10221706.JJ0DCXX.PZ.jpg",
        },
        {
          alt: "3/4 Sleeve V-Neck Top, , large",
          url:
            "/on/demandware.static/-/Sites-apparel-m-catalog/default/dw8d015ba2/images/large/PG.10221706.JJ0DCXX.BZ.jpg",
          index: "1",
          title: "3/4 Sleeve V-Neck Top, ",
          absURL:
            "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.static/-/Sites-apparel-m-catalog/default/dw8d015ba2/images/large/PG.10221706.JJ0DCXX.BZ.jpg",
        },
        {
          alt: "3/4 Sleeve V-Neck Top, , large",
          url:
            "/on/demandware.static/-/Sites-apparel-m-catalog/default/dw6eda398f/images/large/PG.10221706.JJ0DCXX.PZ.jpg",
          index: "2",
          title: "3/4 Sleeve V-Neck Top, ",
          absURL:
            "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.static/-/Sites-apparel-m-catalog/default/dw6eda398f/images/large/PG.10221706.JJ0DCXX.PZ.jpg",
        },
        {
          alt: "3/4 Sleeve V-Neck Top, , large",
          url:
            "/on/demandware.static/-/Sites-apparel-m-catalog/default/dw8d015ba2/images/large/PG.10221706.JJ0DCXX.BZ.jpg",
          index: "3",
          title: "3/4 Sleeve V-Neck Top, ",
          absURL:
            "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.static/-/Sites-apparel-m-catalog/default/dw8d015ba2/images/large/PG.10221706.JJ0DCXX.BZ.jpg",
        },
        {
          alt: "3/4 Sleeve V-Neck Top, , large",
          url:
            "/on/demandware.static/-/Sites-apparel-m-catalog/default/dw6eda398f/images/large/PG.10221706.JJ0DCXX.PZ.jpg",
          index: "4",
          title: "3/4 Sleeve V-Neck Top, ",
          absURL:
            "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.static/-/Sites-apparel-m-catalog/default/dw6eda398f/images/large/PG.10221706.JJ0DCXX.PZ.jpg",
        },
        {
          alt: "3/4 Sleeve V-Neck Top, , large",
          url:
            "/on/demandware.static/-/Sites-apparel-m-catalog/default/dw8d015ba2/images/large/PG.10221706.JJ0DCXX.BZ.jpg",
          index: "5",
          title: "3/4 Sleeve V-Neck Top, ",
          absURL:
            "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.static/-/Sites-apparel-m-catalog/default/dw8d015ba2/images/large/PG.10221706.JJ0DCXX.BZ.jpg",
        },
        {
          alt: "3/4 Sleeve V-Neck Top, , large",
          url:
            "/on/demandware.static/-/Sites-apparel-m-catalog/default/dw6eda398f/images/large/PG.10221706.JJ0DCXX.PZ.jpg",
          index: "6",
          title: "3/4 Sleeve V-Neck Top, ",
          absURL:
            "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.static/-/Sites-apparel-m-catalog/default/dw6eda398f/images/large/PG.10221706.JJ0DCXX.PZ.jpg",
        },
        {
          alt: "3/4 Sleeve V-Neck Top, , large",
          url:
            "/on/demandware.static/-/Sites-apparel-m-catalog/default/dw8d015ba2/images/large/PG.10221706.JJ0DCXX.BZ.jpg",
          index: "7",
          title: "3/4 Sleeve V-Neck Top, ",
          absURL:
            "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.static/-/Sites-apparel-m-catalog/default/dw8d015ba2/images/large/PG.10221706.JJ0DCXX.BZ.jpg",
        },
      ],
      small: [
        {
          alt: "3/4 Sleeve V-Neck Top, , small",
          url:
            "/on/demandware.static/-/Sites-apparel-m-catalog/default/dw4ba4342d/images/small/PG.10221706.JJ0DCXX.PZ.jpg",
          index: "0",
          title: "3/4 Sleeve V-Neck Top, ",
          absURL:
            "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.static/-/Sites-apparel-m-catalog/default/dw4ba4342d/images/small/PG.10221706.JJ0DCXX.PZ.jpg",
        },
        {
          alt: "3/4 Sleeve V-Neck Top, , small",
          url:
            "/on/demandware.static/-/Sites-apparel-m-catalog/default/dw537c17d7/images/small/PG.10221706.JJ0DCXX.BZ.jpg",
          index: "1",
          title: "3/4 Sleeve V-Neck Top, ",
          absURL:
            "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.static/-/Sites-apparel-m-catalog/default/dw537c17d7/images/small/PG.10221706.JJ0DCXX.BZ.jpg",
        },
      ],
    },
    selectedQuantity: 1,
    minOrderQuantity: 1,
    maxOrderQuantity: 10,
    variationAttributes: [
      {
        attributeId: "color",
        displayName: "Color",
        id: "color",
        swatchable: true,
        values: [
          {
            id: "JJ0DCXX",
            description: null,
            displayValue: "Black & White",
            value: "JJ0DCXX",
            selected: false,
            selectable: true,
            url:
              "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25519274M_color=JJ0DCXX&pid=25519274M&quantity=1",
            images: {
              swatch: [
                {
                  alt: "3/4 Sleeve V-Neck Top, Black & White, swatch",
                  url:
                    "/on/demandware.static/-/Sites-apparel-m-catalog/default/dw163112cb/images/swatch/PG.10221706.JJ0DCXX.CP.jpg",
                  index: "0",
                  title: "3/4 Sleeve V-Neck Top, Black & White",
                  absURL:
                    "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.static/-/Sites-apparel-m-catalog/default/dw163112cb/images/swatch/PG.10221706.JJ0DCXX.CP.jpg",
                },
              ],
            },
          },
          {
            id: "JJ3QAXX",
            description: null,
            displayValue: "Butter Multi",
            value: "JJ3QAXX",
            selected: false,
            selectable: true,
            url:
              "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25519274M_color=JJ3QAXX&pid=25519274M&quantity=1",
            images: {
              swatch: [
                {
                  alt: "3/4 Sleeve V-Neck Top, Butter Multi, swatch",
                  url:
                    "/on/demandware.static/-/Sites-apparel-m-catalog/default/dwf8839179/images/swatch/PG.10221706.JJ3QAXX.CP.jpg",
                  index: "0",
                  title: "3/4 Sleeve V-Neck Top, Butter Multi",
                  absURL:
                    "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.static/-/Sites-apparel-m-catalog/default/dwf8839179/images/swatch/PG.10221706.JJ3QAXX.CP.jpg",
                },
              ],
            },
          },
          {
            id: "JJ3XMXX",
            description: null,
            displayValue: "Grey Heather Multi",
            value: "JJ3XMXX",
            selected: false,
            selectable: true,
            url:
              "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25519274M_color=JJ3XMXX&pid=25519274M&quantity=1",
            images: {
              swatch: [
                {
                  alt: "3/4 Sleeve V-Neck Top, Grey Heather Multi, swatch",
                  url:
                    "/on/demandware.static/-/Sites-apparel-m-catalog/default/dw87d08bbd/images/swatch/PG.10221706.JJ3XMXX.CP.jpg",
                  index: "0",
                  title: "3/4 Sleeve V-Neck Top, Grey Heather Multi",
                  absURL:
                    "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.static/-/Sites-apparel-m-catalog/default/dw87d08bbd/images/swatch/PG.10221706.JJ3XMXX.CP.jpg",
                },
              ],
            },
          },
          {
            id: "JJE26XX",
            description: null,
            displayValue: "Icy Mint Multi",
            value: "JJE26XX",
            selected: false,
            selectable: true,
            url:
              "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25519274M_color=JJE26XX&pid=25519274M&quantity=1",
            images: {
              swatch: [
                {
                  alt: "3/4 Sleeve V-Neck Top, Icy Mint Multi, swatch",
                  url:
                    "/on/demandware.static/-/Sites-apparel-m-catalog/default/dwd8a61c59/images/swatch/PG.10221706.JJE26XX.CP.jpg",
                  index: "0",
                  title: "3/4 Sleeve V-Neck Top, Icy Mint Multi",
                  absURL:
                    "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.static/-/Sites-apparel-m-catalog/default/dwd8a61c59/images/swatch/PG.10221706.JJE26XX.CP.jpg",
                },
              ],
            },
          },
        ],
      },
      {
        attributeId: "size",
        displayName: "Size",
        id: "size",
        swatchable: false,
        values: [
          {
            id: "9XS",
            description: null,
            displayValue: "XS",
            value: "9XS",
            selected: false,
            selectable: true,
            url:
              "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25519274M_size=9XS&pid=25519274M&quantity=1",
          },
          {
            id: "9SM",
            description: null,
            displayValue: "S",
            value: "9SM",
            selected: false,
            selectable: true,
            url:
              "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25519274M_size=9SM&pid=25519274M&quantity=1",
          },
          {
            id: "9MD",
            description: null,
            displayValue: "M",
            value: "9MD",
            selected: false,
            selectable: true,
            url:
              "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25519274M_size=9MD&pid=25519274M&quantity=1",
          },
          {
            id: "9LG",
            description: null,
            displayValue: "L",
            value: "9LG",
            selected: false,
            selectable: true,
            url:
              "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25519274M_size=9LG&pid=25519274M&quantity=1",
          },
          {
            id: "9XL",
            description: null,
            displayValue: "XL",
            value: "9XL",
            selected: false,
            selectable: true,
            url:
              "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25519274M_size=9XL&pid=25519274M&quantity=1",
          },
        ],
        resetUrl:
          "https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25519274M_size=&pid=25519274M&quantity=1",
      },
    ],
    longDescription:
      "Wear this v-neck top alone, or pair it with a jacket for a classic look.",
    shortDescription:
      "Wear this v-neck top alone, or pair it with a jacket for a classic look.",
    rating: 4.7,
    promotions: [
      {
        calloutMsg: "Buy one Long Center Seam Skirt and get 2 tops",
        details: "Buy one Long Center Seam Skirt and get 2 tops",
        enabled: true,
        id: "ChoiceOfBonusProdect-ProductLevel-ruleBased",
        name: "ChoiceOfBonusProdect-ProductLevel-ruleBased",
        promotionClass: "PRODUCT",
        rank: null,
      },
    ],
    attributes: null,
    availability: {
      messages: ["In Stock"],
      inStockDate: null,
    },
    available: true,
    options: [],
    quantities: [
      {
        value: "1",
        selected: true,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?pid=25519274M&quantity=1",
      },
      {
        value: "2",
        selected: false,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?pid=25519274M&quantity=2",
      },
      {
        value: "3",
        selected: false,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?pid=25519274M&quantity=3",
      },
      {
        value: "4",
        selected: false,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?pid=25519274M&quantity=4",
      },
      {
        value: "5",
        selected: false,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?pid=25519274M&quantity=5",
      },
      {
        value: "6",
        selected: false,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?pid=25519274M&quantity=6",
      },
      {
        value: "7",
        selected: false,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?pid=25519274M&quantity=7",
      },
      {
        value: "8",
        selected: false,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?pid=25519274M&quantity=8",
      },
      {
        value: "9",
        selected: false,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?pid=25519274M&quantity=9",
      },
      {
        value: "10",
        selected: false,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?pid=25519274M&quantity=10",
      },
    ],
    sizeChartId: "womens-clothing",
    selectedProductUrl:
      "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Show?pid=25519274M&quantity=undefined",
    readyToOrder: false,
    online: true,
    pageTitle: "3/4 Sleeve V-Neck Top",
    pageDescription:
      "Wear this v-neck top alone, or pair it with a jacket for a classic look.",
    pageKeywords: null,
    pageMetaTags: [{}, {}, {}, {}],
    template: null,
  },
  productVariant: {
    uuid: "0451566ef4aa3a2997028dea25",
    id: "701642887584M",
    productName: "Belted Boat Neck",
    productType: "variant",
    brand: null,
    price: {
      sales: {
        value: 58.99,
        currency: "USD",
        formatted: "$58.99",
        decimalPrice: "58.99",
      },
      list: {
        value: 79,
        currency: "USD",
        formatted: "$79.00",
        decimalPrice: "79.00",
      },
      html:
        '\n\n\n\n    <div class="price">\n        \n        <span>\n    \n\n    \n        \n        <del>\n            <span class="strike-through list">\n                <span class="value" content="79.00">\n                    <span class="sr-only">\n                        Price reduced from\n                    </span>\n                    $79.00\n\n\n                    <span class="sr-only">\n                        to\n                    </span>\n                </span>\n            </span>\n        </del>\n    \n\n    \n    <span class="sales">\n        \n        \n        \n            <span class="value" content="58.99">\n        \n        $58.99\n\n\n        </span>\n    </span>\n</span>\n\n    </div>\n\n\n',
    },
    images: {
      large: [
        {
          alt: "Belted Boat Neck, Laurel, large",
          url:
            "/on/demandware.static/-/Sites-apparel-m-catalog/default/dw27d977a1/images/large/PG.10214675.JJ0NLB1.PZ.jpg",
          index: "0",
          title: "Belted Boat Neck, Laurel",
          absURL:
            "https://zzrp-005.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.static/-/Sites-apparel-m-catalog/default/dw27d977a1/images/large/PG.10214675.JJ0NLB1.PZ.jpg",
        },
        {
          alt: "Belted Boat Neck, Laurel, large",
          url:
            "/on/demandware.static/-/Sites-apparel-m-catalog/default/dw1d93212d/images/large/PG.10214675.JJ0NLB1.BZ.jpg",
          index: "1",
          title: "Belted Boat Neck, Laurel",
          absURL:
            "https://zzrp-005.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.static/-/Sites-apparel-m-catalog/default/dw1d93212d/images/large/PG.10214675.JJ0NLB1.BZ.jpg",
        },
      ],
      small: [
        {
          alt: "Belted Boat Neck, Laurel, small",
          url:
            "/on/demandware.static/-/Sites-apparel-m-catalog/default/dwa3fbe726/images/small/PG.10214675.JJ0NLB1.PZ.jpg",
          index: "0",
          title: "Belted Boat Neck, Laurel",
          absURL:
            "https://zzrp-005.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.static/-/Sites-apparel-m-catalog/default/dwa3fbe726/images/small/PG.10214675.JJ0NLB1.PZ.jpg",
        },
        {
          alt: "Belted Boat Neck, Laurel, small",
          url:
            "/on/demandware.static/-/Sites-apparel-m-catalog/default/dwacda86d7/images/small/PG.10214675.JJ0NLB1.BZ.jpg",
          index: "1",
          title: "Belted Boat Neck, Laurel",
          absURL:
            "https://zzrp-005.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.static/-/Sites-apparel-m-catalog/default/dwacda86d7/images/small/PG.10214675.JJ0NLB1.BZ.jpg",
        },
      ],
    },
    selectedQuantity: 3,
    minOrderQuantity: 1,
    maxOrderQuantity: 10,
    variationAttributes: [
      {
        attributeId: "color",
        displayName: "Color",
        id: "color",
        swatchable: true,
        values: [
          {
            id: "JJ0NLB1",
            description: null,
            displayValue: "Laurel",
            value: "JJ0NLB1",
            selected: true,
            selectable: true,
            url:
              "https://zzrp-005.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25502108M_color=&dwvar_25502108M_size=9SM&pid=25502108M&quantity=3",
            images: {
              swatch: [
                {
                  alt: "Belted Boat Neck, Laurel, swatch",
                  url:
                    "/on/demandware.static/-/Sites-apparel-m-catalog/default/dw5deb66a8/images/swatch/PG.10214675.JJ0NLB1.CP.jpg",
                  index: "0",
                  title: "Belted Boat Neck, Laurel",
                  absURL:
                    "https://zzrp-005.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.static/-/Sites-apparel-m-catalog/default/dw5deb66a8/images/swatch/PG.10214675.JJ0NLB1.CP.jpg",
                },
              ],
            },
          },
        ],
      },
      {
        attributeId: "size",
        displayName: "Size",
        id: "size",
        swatchable: false,
        values: [
          {
            id: "9SM",
            description: null,
            displayValue: "S",
            value: "9SM",
            selected: true,
            selectable: true,
            url:
              "https://zzrp-005.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25502108M_color=JJ0NLB1&dwvar_25502108M_size=&pid=25502108M&quantity=3",
          },
          {
            id: "9MD",
            description: null,
            displayValue: "M",
            value: "9MD",
            selected: false,
            selectable: true,
            url:
              "https://zzrp-005.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25502108M_color=JJ0NLB1&dwvar_25502108M_size=9MD&pid=25502108M&quantity=3",
          },
          {
            id: "9LG",
            description: null,
            displayValue: "L",
            value: "9LG",
            selected: false,
            selectable: true,
            url:
              "https://zzrp-005.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25502108M_color=JJ0NLB1&dwvar_25502108M_size=9LG&pid=25502108M&quantity=3",
          },
          {
            id: "9XL",
            description: null,
            displayValue: "XL",
            value: "9XL",
            selected: false,
            selectable: true,
            url:
              "https://zzrp-005.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25502108M_color=JJ0NLB1&dwvar_25502108M_size=9XL&pid=25502108M&quantity=3",
          },
        ],
        resetUrl:
          "https://zzrp-005.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25502108M_color=JJ0NLB1&dwvar_25502108M_size=&pid=25502108M&quantity=3",
      },
    ],
    longDescription:
      "Pair this 3/4 sleeve belted rib boat neck with one of our updated classic skirts.",
    shortDescription:
      "Pair this 3/4 sleeve belted rib boat neck with one of our updated classic skirts.",
    rating: 5,
    promotions: [
      {
        calloutMsg: "Buy one Long Center Seam Skirt and get 2 tops",
        details: "Buy one Long Center Seam Skirt and get 2 tops",
        enabled: true,
        id: "ChoiceOfBonusProdect-ProductLevel-ruleBased",
        name: "ChoiceOfBonusProdect-ProductLevel-ruleBased",
        promotionClass: "PRODUCT",
        rank: null,
      },
    ],
    attributes: null,
    availability: {
      messages: ["In Stock"],
      inStockDate: null,
    },
    available: true,
    options: [],
    quantities: [
      {
        value: "1",
        selected: false,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25502108M_color=JJ0NLB1&dwvar_25502108M_size=9SM&pid=701642887584M&quantity=1",
      },
      {
        value: "2",
        selected: false,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25502108M_color=JJ0NLB1&dwvar_25502108M_size=9SM&pid=701642887584M&quantity=2",
      },
      {
        value: "3",
        selected: true,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25502108M_color=JJ0NLB1&dwvar_25502108M_size=9SM&pid=701642887584M&quantity=3",
      },
      {
        value: "4",
        selected: false,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25502108M_color=JJ0NLB1&dwvar_25502108M_size=9SM&pid=701642887584M&quantity=4",
      },
      {
        value: "5",
        selected: false,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25502108M_color=JJ0NLB1&dwvar_25502108M_size=9SM&pid=701642887584M&quantity=5",
      },
      {
        value: "6",
        selected: false,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25502108M_color=JJ0NLB1&dwvar_25502108M_size=9SM&pid=701642887584M&quantity=6",
      },
      {
        value: "7",
        selected: false,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25502108M_color=JJ0NLB1&dwvar_25502108M_size=9SM&pid=701642887584M&quantity=7",
      },
      {
        value: "8",
        selected: false,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25502108M_color=JJ0NLB1&dwvar_25502108M_size=9SM&pid=701642887584M&quantity=8",
      },
      {
        value: "9",
        selected: false,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25502108M_color=JJ0NLB1&dwvar_25502108M_size=9SM&pid=701642887584M&quantity=9",
      },
      {
        value: "10",
        selected: false,
        url:
          "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Variation?dwvar_25502108M_color=JJ0NLB1&dwvar_25502108M_size=9SM&pid=701642887584M&quantity=10",
      },
    ],
    sizeChartId: "womens-clothing",
    selectedProductUrl:
      "/on/demandware.store/Sites-RefArch-Site/en_US/Product-Show?dwvar_25502108M_color=JJ0NLB1&dwvar_25502108M_size=9SM&pid=25502108M&quantity=3",
    readyToOrder: true,
    online: true,
    pageTitle: "Belted Boat Neck",
    pageDescription:
      "Pair this 3/4 sleeve belted rib boat neck with one of our updated classic skirts.",
    pageKeywords: null,
    pageMetaTags: [{}, {}, {}, {}],
    template: null,
    attributesHtml: "\n\n\n\n",
    promotionsHtml:
      '\n\n    \n        <div class="row collapsible-xl">\n\t        <div class="col-12">\n\t            <button class="title callout btn text-left btn-block"\n\t                    aria-expanded="false" aria-controls="collapsible-promotion-details-0">\n\t                Buy one Long Center Seam Skirt and get 2 tops\n\t            </button>\n\t        </div>\n\t\t\t<div class="col-12 value content" id="collapsible-promotion-details-0">\n\t\t        Buy one Long Center Seam Skirt and get 2 tops\n            </div>\n\t    </div>\n\t    <hr>\n    \n\n',
    optionsHtml: "\n\n\n",
  },
  resources: {
    availability: "Availability",
  },
};

export default productMocked;
