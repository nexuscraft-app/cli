import { Args, Command } from "@oclif/core";

import { secret } from "../../utils/secret.js";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const groups: {
  description: string;
  id: number;
  name: string;
  online: string;
}[] = [
  { description: "the fallback group", id: 1, name: "Lobby", online: "1/5" },
];

export default class GroupStart extends Command {
  static override args = {
    groupName: Args.string({
      options: ["Lobby", "Survival", "Creative"],
    }),
  };

  static override description = "describe the command here";

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    const { args } = await this.parse(GroupStart);

    const key = await secret.read(this);

    if (key) {
      this.log(args.groupName);
    }
  }
}
