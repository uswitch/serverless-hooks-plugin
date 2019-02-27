'use strict';

const execSync = require('child_process').execSync

class ServerlessHooksPlugin {

  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    const buildHookFunction = hook => (
      () => {
        const commands = serverless.service.custom.hooks[hook] || []
        commands.forEach(
          command => {
            serverless.cli.log(`Running ${hook} command: "${command}"`)
            var output = execSync(command).toString()
            if (output) {
              serverless.cli.log(output)
            }
          }
        )
      }
    )

    const hooksObj = {}

    serverless.service.custom = serverless.service.custom || {}
    serverless.service.custom.hooks = serverless.service.custom.hooks || {}
    Object.keys(serverless.service.custom.hooks).forEach(
      hook => {
        hooksObj[hook] = buildHookFunction(hook)
      }
    )

    this.hooks = hooksObj
  }
}

module.exports = ServerlessHooksPlugin;
