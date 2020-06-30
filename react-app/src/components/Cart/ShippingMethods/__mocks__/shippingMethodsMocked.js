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

const shippingMethodsMocked = {
  shipments: [
    {
      shippingMethods: [
        {
          ID: "001",
          displayName: "Ground",
          description: "Order received within 7-10 business days",
          estimatedArrivalTime: "7-10 Business Days",
          default: true,
          shippingCost: "$9.99",
          selected: true,
        },
        {
          ID: "002",
          displayName: "2-Day Express",
          description: "Order received in 2 business days",
          estimatedArrivalTime: "2 Business Days",
          default: false,
          shippingCost: "$15.99",
          selected: false,
        },
        {
          ID: "003",
          displayName: "Overnight",
          description: "Order received the next business day",
          estimatedArrivalTime: "Next Day",
          default: false,
          shippingCost: "$21.99",
          selected: false,
        },
        {
          ID: "012",
          displayName: "Express",
          description:
            "Orders shipped outside continental US received in 2-3 business days",
          estimatedArrivalTime: "2-3 Business Days",
          default: false,
          shippingCost: "$28.99",
          selected: false,
        },
        {
          ID: "021",
          displayName: "USPS",
          description:
            "Order shipped by USPS received within 7-10 business days",
          estimatedArrivalTime: "7-10 Business Days",
          default: false,
          shippingCost: "$9.99",
          selected: false,
        },
      ],
      selectedShippingMethod: "001",
    },
  ],
};

export default shippingMethodsMocked;
