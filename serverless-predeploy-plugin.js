'use strict';

class ServerlessPredeployPlugin {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.hooks = {
      'before:deploy:initialize': this.predeployCommands.bind(this),
    };
  }

  predeployCommands() {
    this.serverless.service.custom.predeploy_commands.forEach(
      command => {
        this.serverless.cli.log(`Running predeploy command: "${command}"`)
        exec(command)
      }
    )
  }
}

module.exports = ServerlessPredeployPlugin;
