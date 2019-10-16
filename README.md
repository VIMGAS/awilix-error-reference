# Spendfy Microservice Template

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of contents

- [Spendfy Microservice Template](#spendfy-microservice-template)
  - [Table of contents](#table-of-contents)
- [Structure](#structure)
  - [Folder Structure](#folder-structure)
    - [src/app folder](#srcapp-folder)
    - [src/config folder](#srcconfig-folder)
      - [Example config file](#example-config-file)
    - [src/container folder](#srccontainer-folder)
    - [src/infrastructure](#srcinfrastructure)
    - [src/interfaces](#srcinterfaces)
    - [src/services](#srcservices)
    - [src/utils](#srcutils)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Structure

The Spendfy Structure is based on SOLID and DDD principles.

## Folder Structure

```
src
  app
  config
  container
  infrastructure
  interfaces
  services
  utils
```

### src/app folder

This is where the application lives. Every express server bootstraping and config
is suposed to be done here.

### src/config folder
This is where the application configuration is suposed to be. The main `index.js` file needs to load every other config file in this folder and pass it on.

#### Example config file

src/config/app.js
```js
/**
 * @typedef {Object} AppConfig
 * @property {string} name
 * @property {number} port
 * @property {string} url
 * @property {string} secret
 */

/**
 * Generates a AppConfig object.
 * @returns {AppConfig}
 */
function AppConfigFactory() {
  return {
    name: process.env.APP_NAME,
    port: parseInt(process.env.APP_PORT, 10),
    url: process.env.APP_URL,
    secret: process.env.APP_SECRET,
  };
}

export default AppConfigFactory;
```

### src/container folder
This is where the DI container of Spendfy microservices live.

We use [Awilix](https://github.com/jeffijoe/awilix) package to do that.

### src/infrastructure

This is where all the infrastructure-related code is suposed to live.

i.e.: Database, Factory, etc.

### src/interfaces

This is the part of the application responsible for handling outside connections, things like http connections, websockets connections and aliked should be here.

### src/services

This is where all the services should be located. Services are the Domais of the application.

i.e.: User, Company, etc.

### src/utils

All util or handy functions/objects/methods/classes should go here.