# Headless Commerce Accelerator for Salesforce Commerce Cloud#

# The latest version

The latest version of SFRA is 4.4.1

# Getting Started

1. Clone this repository.

2. Run `npm install` to install all of the local dependencies (node version 10.16.3 and npm version 6.9.0).

3. Create `dw.json` file in the root of the project:
```json
{
    "hostname": "your-sandbox-hostname.demandware.net",
    "username": "yourlogin",
    "password": "yourpwd",
    "code-version": "version_to_upload_to"
}
```

4. Run `npm run uploadCartridge`. It will upload `app_storefront_custom` cartridges to the sandbox you specified in `dw.json` file.

5. Add the `app_storefront_custom` cartridge to your cartridge path in _Administration >  Sites >  Manage Sites > RefArch - Settings_.

6. You should now be ready to navigate to and use your site.

# NPM scripts
Use the provided NPM scripts to compile and upload changes to your Sandbox.

## Linting your code

`npm run lint` - Execute linting for all JavaScript and SCSS files in the project. You should run this command before committing your code.

## Uploading

`npm run uploadCartridge` - Will upload `app_storefront_custom` to the server. Requires a valid `dw.json` file at the root that is configured for the sandbox to upload.

`npm run upload <filepath>` - Will upload a given file to the server. Requires a valid `dw.json` file.
