'use strict';

class ServerlessPredeployPlugin {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.hooks = {
      'before:deploy:initialize': this.predeployInstructions.bind(this),
    };
  }

  predeployInstructions() {
    this.serverless.service.custom.predeploy_instructions.forEach(
      instruction => {
        this.serverless.cli.log(`Running predeploy_instruction: "${instruction}"`)
        exec(instruction)
      }
    )
  }
}

module.exports = ServerlessPredeployPlugin;
