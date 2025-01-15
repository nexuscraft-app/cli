/* eslint-disable no-warning-comments */
import { Command } from "@oclif/core";
import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";

import { secret } from "../../utils/secret.js";

const groups = [
  {
    description: "the fallback group",
    id: 1,
    name: "Lobby",
    online: "1/5",
  },
  {
    description: "the fallback group",
    id: 2,
    name: "BedWars",
    online: "1/5",
  },
  {
    description: "the fallback group",
    id: 3,
    name: "SkyWars",
    online: "1/5",
  },
  {
    description: "the fallback group",
    id: 4,
    name: "CityBuild",
    online: "1/5",
  },
  {
    description: "the fallback group",
    id: 5,
    name: "Lobby",
    online: "1/5",
  },
  {
    description: "the fallback group",
    id: 6,
    name: "BuildFFA",
    online: "1/5",
  },
  {
    description: "the fallback group",
    id: 7,
    name: "Builder",
    online: "1/5",
  },
];

export default class GroupDelete extends Command {
  static override description = "delete a group";

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    const key = await secret.read(this);

    if (key) {
      // TODO: change this to autocomplete
      await inquirer.prompt([
        {
          choices: groups.map((group) => group.name),
          default: "",
          message: "Choose a group to delete",
          name: "group",
          type: "list",
        },
      ]);

      const spinner = ora("Deleting Group...").start();

      setTimeout(() => {
        spinner.succeed(chalk.green("Group deleted!"));
      }, 1500);
    }
  }
}
