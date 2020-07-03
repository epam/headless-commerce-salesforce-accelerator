# Headless Commerce Accelerator for Salesforce Commerce Cloud #

# General overview
This implementation consists of 3 parts and divided into three folders:
•	process_api – folder which contains app_storefront_custom cartridge which extends SFRA functionality to make possible communication between react application and Salesforce Commerce Cloud
•	react-app – contains code for frontend part of the application
•	storefrontdata-master – metadata needed to extend existing initial SFRA metadata

# NPM scripts
Use the provided NPM scripts to compile and upload changes to your Sandbox.

# Updating cartridge path
To integrate headless SFRA based on React.js you need to add app_storefront_custom to your target site cartridge path before base SFRA cartridges. In order to add cartridge to cartridge path: BM > Administration > Sites > Manage Sites > <YOUR SITE> - Settings > Cartridges:
app_storefront_custom:app_storefront_base:modules

# Updating metadata
In order to adopt react application to SFRA you need to update metadata. Metadata are provided in a special folder: storefrontdata-master. In order to update metadata, go to: Administration > Site Development > Import & Export: upload system-objecttype-extensions.xml and import it

# Catalog configuration
You need to configure categories: by enabling isPLP custom attribute on every category in site catalog where it is needed. It means that for categories where isPLP is disabled product grid won’t be shown.
Optionally, you can adopt existing demo SFRA catalog you can import demo storefront catalog under storefront-catalog-m-en. In order to import demo configuration, go to: Merchant Tools > Products and Catalogs > Import & Export upload demo storefront catalog and import it

# Connecting React application to SFCC
In order to connect react application to SFCC in your file system go to react-app/.env and specify base url of your storefront. Please look at example below:
NODE_PATH=src/
HTTPS=true
REACT_APP_BASE_URL=https://zzrp-005.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.store/Sites-RefArch-Site/en_US
You need to configure api.js: react-app/src/services/config as example below:
const api = {
  host: "https://zzrp-005.sandbox.us01.dx.commercecloud.salesforce.com",
};

export default api;

# Storefront URLs
New Rule-Based Storefront URLs should be disabled to avoid communication issues between react app and SFCC. In order to disable storefront URLs in BM go to: Merchant Tools > Site Preferences > Storefront URL and uncheck Enable Storefront URLs:

# Run application
1. Clone this repository.

2. Use storefront referene architecture cartridge as a core (follow instructions provided in SFRA cartridge)

3. Using terminal move to react_app folder : > cd react_app

4. Run `npm install` to install all of the local dependencies.

5. upload app_storefront_custom cartridge to SFCC environment

6. Run react application: > npm start 

