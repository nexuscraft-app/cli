/* eslint-disable no-warning-comments */
import {Command, Flags} from '@oclif/core'
import chalk from 'chalk'
import inquirer from 'inquirer'
import {userInfo} from 'node:os'
import terminalLink from 'terminal-link'

import {secret} from '../utils/secret.js'

export default class Connect extends Command {
  static override description = 'connect to the cloud'

  static override examples = ['<%= config.bin %> <%= command.id %> --u my-username --s my-secret']

  static flags = {
    secret: Flags.string({char: 's', description: 'the secret to connect to the cloud'}),
    username: Flags.string({char: 'u', description: 'the username to connect to the cloud'}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(Connect)

    const dashboardLink = terminalLink('nexuscraft.', 'https://nexuscraft.io/dashboard')
    const user = userInfo().username
    this.log(`\nWelcome ${chalk.blue(user)} to ${chalk.blue(dashboardLink)}!\n`)

    const config: {secret?: string; username?: string} = {}

    if (!flags.username) {
      await inquirer
        .prompt([
          {
            default: '',
            message: 'Enter your username:',
            name: 'username',
            type: 'input',
          },
        ])
        .then((answers) => {
          // todo: check if the username is valid
          config.username = answers.username
        })
    }

    if (!flags.secret) {
      await inquirer
        .prompt([
          {
            default: '',
            message: 'Enter your secret:',
            name: 'secret',
            type: 'input',
          },
        ])
        .then((answers) => {
          config.secret = answers.secret
        })
    }

    const usernameValue = config.username ?? flags.username
    if (!usernameValue) {
      this.error(chalk.red('No username provided. Please provide a username to connect to the cloud.'))
    }

    const secretValue = config.secret ?? flags.secret
    if (!secretValue) {
      this.error(chalk.red('No secret provided. Please provide a secret to connect to the cloud.'))
    }

    secret.save(this, usernameValue, secretValue)
  }
}
