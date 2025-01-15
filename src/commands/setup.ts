import { confirm } from "@inquirer/prompts";
import { Command, Flags } from "@oclif/core";
import chalk from "chalk";
import inquirer from "inquirer";
import os from "node:os";
import ora from "ora";

export default class Setup extends Command {
  static override description = "setup a new network";

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    autoUpdate: Flags.boolean({
      char: "a",
      description: "auto update the cli",
    }),
    lang: Flags.string({ char: "l", description: "language for the cli" }),
    name: Flags.string({ char: "n", description: "name of the network" }),
    ram: Flags.integer({ description: "ram for the network" }),
    type: Flags.string({ char: "t", description: "type of the network" }),
  };

  public async run(): Promise<void> {
    const { flags } = await this.parse(Setup);

    const config: {
      autoUpdate?: boolean;
      lang?: string;
      name?: string;
      ram?: number;
      type?: string;
    } = {
      autoUpdate: flags.autoUpdate,
      lang: flags.lang,
      name: flags.name,
      ram: flags.ram,
      type: flags.type,
    };

    if (!config.type) {
      await inquirer
        .prompt([
          {
            choices: ["New installation", "New node"],
            default: "New installation",
            message: `${chalk.blue("Type")} ${chalk.gray(
              "(Choose your type of installation):"
            )}`,
            name: "type",
            type: "select",
          },
        ])
        .then((answers) => {
          config.type = answers.type;
        });
    }

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

    if (!config.name) {
      await inquirer
        .prompt([
          {
            default: "",
            message: `${chalk.blue("Name")} ${chalk.gray(
              "(Enter the name of the network):"
            )}`,
            name: "name",
            type: "input",
          },
        ])
        .then((answers) => {
          config.name = answers.name;
        });
    }

    const totalRam = os.totalmem() / (1024 * 1024);

    if (!config.ram) {
      await inquirer
        .prompt([
          {
            default: totalRam,
            max: totalRam,
            message: `${chalk.blue("RAM")} ${chalk.gray(
              "(Enter the amount of memory (in MB) to allocate):"
            )}`,
            min: 1024,
            name: "ram",
            required: true,
            step: 1024,
            type: "number",
          },
        ])
        .then((answers) => {
          config.ram = answers.ram;
        });
    }

    await confirm({
      default: true,
      message: `Do you want to create the network with the following settings: \n\n${JSON.stringify(
        config
      )}\n\n`,
    }).then((answers) => {
      if (answers === true) {
        const spinner = ora("Creating network...").start();

        spinner.suffixText = "0%";

        setTimeout(() => {
          spinner.suffixText = "25%";
        }, 500);

        setTimeout(() => {
          spinner.suffixText = "100%";
          spinner.succeed(chalk.green("Network created!"));
        }, 1500);
      }
    });
  }
}
