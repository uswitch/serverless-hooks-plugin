# Serverless Hooks Plugin

## How to use

### Install from npm

1. Ensure your project has a valid `package.json`.
1. Run `npm install --save serverless-hooks-plugin`.
1. Add `serverless-hooks-plugin` to the list of plugins in `serverless.yml`. The plugins list is an array at the root level (an example `serverless.yml` is included in this project).
1. Add an array of hooks to be used as per examples, at `custom: hooks`.

### Local installation (not recommended)
1. Copy `serverless-hooks-plugin.js` into `.serverless-plugins` in the serverless project. You may need to create this folder.
1. Add `serverless-hooks-plugin` to the list of plugins in `serverless.yml`. The plugins list is an array at the root level (an example `serverless.yml` is included in this project).
1. Add an array of hooks to be used as per examples, at `custom: hooks`.
