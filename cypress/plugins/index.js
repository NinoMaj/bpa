// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const customConfig = {
  baseUrl: 'http://localhost:3000',
  viewportHeight: 900,
  viewportWidth: 400,
  integrationFolder: 'cypress/e2e',
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  supportFile: 'cypress/support/index.js',
  pluginsFile: 'cypress/plugins/index.js',
  fixturesFolder: 'cypress/fixtures',
};

module.exports = (on, config) => {
  if (config.env.configFile === 'custom') {
    Object.assign(config, customConfig);
  }
  return config;
};
