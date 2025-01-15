import {Args, Command} from '@oclif/core'

import {secret} from '../../utils/secret.js'

export default class GroupCreate extends Command {
  static override args = {
    name: Args.string({description: 'the name of the group', required: true}),
  }

  static override description = 'Create a new group on your cloud'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    const {args} = await this.parse(GroupCreate)

    const key = await secret.read(this)

    if (key) {
      this.log(`Creating group: ${args.name}`)
    }
  }
}
