# Serverless Hooks Plugin

A serverless plugin which makes it easy to run arbitrary shell commands for serverless lifecycle events.

Any output that the command creates will be echoed to the serverless CLI log which is displayed on stdout. If a command returns a non-successful exit code then the error will be thrown and execution will stop.

## How to use

```yml
service:
  name: my-project-name

plugins:
  - serverless-hooks-plugin
  - serverless-s3-sync

provider:
  name: aws
  runtime: nodejs6.10
  region: eu-west-2

custom:
  hooks:
    before:package:createDeploymentArtifacts:
      - yarn run build-prod
```

See [blog article](https://medium.com/@P_Lessing/single-page-apps-on-aws-part-2-deploying-a-compiled-frontend-33723e8f6814) for more details

### Install from npm

1. Ensure your project has a valid `package.json`.
1. Run `npm install --save serverless-hooks-plugin`.
1. Add `serverless-hooks-plugin` to the list of plugins in `serverless.yml`. The plugins list is an array at the root level (an example `serverless.yml` is included in this project).
1. Add an array of hooks to be used as per examples, at `custom: hooks`.

### Local installation (not recommended)

1. Copy `serverless-hooks-plugin.js` into `.serverless-plugins` in the serverless project. You may need to create this folder.
1. Add `serverless-hooks-plugin` to the list of plugins in `serverless.yml`. The plugins list is an array at the root level (an example `serverless.yml` is included in this project).
1. Add an array of hooks to be used as per examples, at `custom: hooks`.

### Serverless Lifecycle Events

- See [serverless lifecycle event cheat sheet](https://gist.github.com/HyperBrain/50d38027a8f57778d5b0f135d80ea406)
