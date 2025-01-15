import {Command} from '@oclif/core'
import chalk from 'chalk'
import {existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync} from 'node:fs'
import path from 'node:path'
import ora from 'ora'

export const secret = {
  async read(command: Command): Promise<null | string> {
    const connectionFilePath = path.join(command.config.configDir, 'connection.json')

    if (!existsSync(connectionFilePath)) {
      command.error(chalk.red('No connection file found. Please run `connect` command first.'))
    }

    const connectionData = JSON.parse(readFileSync(connectionFilePath, 'utf8'))
    command.log(`Connecting to the cloud with secret: ${connectionData.secret}`)

    return connectionData.secret
  },

  async save(command: Command, username: string, secret: string): Promise<void> {
    const spinner = ora('Saving your configuration').start()
    // create a connection file with the secret
    // this will be used by other commands to connect to the cloud
    const connectionDir = command.config.configDir
    const connectionFilePath = path.join(connectionDir, 'connection.json')
    const connectionData = {secret, username}

    // Check if the directory exists and create it if it does not
    if (!existsSync(connectionDir)) {
      mkdirSync(connectionDir, {recursive: true})
    }

    // Check if the file exists and delete it if it does
    if (existsSync(connectionFilePath)) {
      unlinkSync(connectionFilePath)
    }

    // Create the connection file with the secret
    writeFileSync(connectionFilePath, JSON.stringify(connectionData, null, 2))

    setTimeout(() => {
      spinner.succeed(chalk.green('Configuration saved successfully'))
    }, 1500)
  },
}
