# Serverless Predeploy Plugin

## How to use

1. Copy `serverless-predeploy-plugin.js` into `.serverless-plugins` in the serverless project. You may need to create this folder
1. Add `serverless-predeploy-plugin` to the list of plugins in `serverless.yml`. The plugins list is an array at the root level (an example `serverless.yml` is included in this project)
1. Add an array of commands to be run at `custom:predeploy_commands`
