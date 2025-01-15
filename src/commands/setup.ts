import { Command, Flags } from "@oclif/core";
import chalk from "chalk";
import inquirer from "inquirer";

export default class Setup extends Command {
  static override description = "setup a new network";

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    lang: Flags.string({ char: "l", description: "language for the cli" }),
    name: Flags.string({ char: "n", description: "name of the network" }),
  };

  public async run(): Promise<void> {
    const { flags } = await this.parse(Setup);

    const config: {
      lang?: string;
      name?: string;
    } = {
      lang: flags.lang,
      name: flags.name,
    };

    if (!config.lang) {
      await inquirer
        .prompt([
          {
            choices: ["EN", "DE"],
            default: "EN",
            message: `${chalk.blue("Language")} ${chalk.gray(
              "(Choose your language):"
            )}`,
            name: "lang",
            type: "select",
          },
        ])
        .then((answers) => {
          config.lang = answers.lang;
        });
    }

    this.log(config.lang);
  }
}
