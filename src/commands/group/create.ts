import { Command } from "@oclif/core";
import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";

import { secret } from "../../utils/secret.js";

export default class GroupCreate extends Command {
  static override description = "Create a new group on your cloud";

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    const key = await secret.read(this);

    if (key) {
      const config: {
        groupName?: string;
        maxMemory?: number;
        maxPlayers?: number;
        maxServer?: number;
        minMemory?: number;
        minServer?: number;
        port?: number;
        software?: string;
        template?: string;
        type?: string;
        version?: string;
      } = {};

      await inquirer
        .prompt([
          {
            default: "",
            message: `${chalk.blue("Name")} ${chalk.gray(
              "(Enter your name):"
            )}`,
            name: "groupName",
            type: "input",
          },
        ])
        .then((answers) => {
          config.groupName = answers.groupName;
        });

      await inquirer
        .prompt([
          {
            choices: ["proxy", "server"],
            default: "server",
            message: `${chalk.blue("Type")} ${chalk.gray(
              "(Choose your type):"
            )}`,
            name: "type",
            type: "select",
          },
        ])
        .then((answers) => {
          config.type = answers.type;
        });

      await inquirer
        .prompt([
          {
            choices: ["static", "dynamic"],
            default: "dynamic",
            message: `${chalk.blue("Template")} ${chalk.gray(
              "(Choose your template):"
            )}`,
            name: "template",
            type: "select",
          },
        ])
        .then((answers) => {
          config.template = answers.template;
        });

      if (config.type === "server") {
        await inquirer
          .prompt([
            {
              choices: ["Paper Spigot", "Spigot"],
              default: "Paper Spigot",
              message: `${chalk.blue("Software")} ${chalk.gray(
                "(Choose your software the server should use):"
              )}`,
              name: "software",
              type: "select",
            },
          ])
          .then((answers) => {
            config.software = answers.software;
          });

        await inquirer
          .prompt([
            {
              choices: ["latest", "1.21.4", "1.21.3", "1.21.2"],
              default: "latest",
              message: `${chalk.blue("Version")} ${chalk.gray(
                "(Choose your version the server should use):"
              )}`,
              name: "version",
              type: "select",
            },
          ])
          .then((answers) => {
            config.version = answers.version;
          });
      }

      if (config.type === "proxy") {
        await inquirer
          .prompt([
            {
              choices: ["BungeeCord", "Velocity", "Waterfall"],
              default: "BungeeCord",
              message: `${chalk.blue("Software")} ${chalk.gray(
                "(Choose your software the proxy should use):"
              )}`,
              name: "software",
              type: "select",
            },
          ])
          .then((answers) => {
            config.software = answers.software;
          });

        await inquirer
          .prompt([
            {
              choices: ["latest", "1.21.4", "1.21.3", "1.21.2"],
              default: "latest",
              message: `${chalk.blue("Version")} ${chalk.gray(
                "(Choose your version the server should use):"
              )}`,
              name: "version",
              type: "select",
            },
          ])
          .then((answers) => {
            config.version = answers.version;
          });
      }

      await inquirer
        .prompt([
          {
            default: "",
            message: `${chalk.blue("Min. memory:")} ${chalk.gray("(MB):")}`,
            name: "minMemory",
            type: "input",
          },
          {
            default: "",
            message: `${chalk.blue("Max. memory:")} ${chalk.gray("(MB):")}`,
            name: "maxMemory",
            type: "input",
          },
        ])
        .then((answers) => {
          config.minMemory = answers.minMemory;
          config.maxMemory = answers.maxMemory;
        });

      await inquirer
        .prompt([
          {
            default: "",
            message: `${chalk.blue("Min. Servers")} ${chalk.gray(
              "(Enter how many servers should always be online):"
            )}`,
            name: "minServer",
            type: "input",
          },
          {
            default: "",
            message: `${chalk.blue("Max. Servers")} ${chalk.gray(
              "(Enter how many servers should be online at maximum):"
            )}`,
            name: "maxServer",
            type: "input",
          },
        ])
        .then((answers) => {
          config.minServer = answers.minServer;
          config.maxServer = answers.maxServer;
        });

      await inquirer
        .prompt([
          {
            default: "",
            message: `${chalk.blue("Max. Players")} ${chalk.gray(
              "(Enter how many players should be able to join):"
            )}`,
            name: "maxPlayers",
            type: "input",
          },
        ])
        .then((answers) => {
          config.maxPlayers = answers.maxPlayers;
        });

      await inquirer
        .prompt([
          {
            default: "",
            message: `${chalk.blue("Port")} ${chalk.gray(
              "(Enter the port which the server should use):"
            )}`,
            name: "port",
            type: "input",
          },
        ])
        .then((answers) => {
          config.port = answers.port;
        });

      this.log("\nThis is your configuration:");
      this.log(`${chalk.gray("┃ ")}${chalk.blue("Name: ")}${config.groupName}`);
      this.log(`${chalk.gray("┃ ")}${chalk.blue("Type: ")}${config.type}`);
      this.log(
        `${chalk.gray("┃ ")}${chalk.blue("Template: ")}${config.template}`
      );
      this.log(
        `${chalk.gray("┃ ")}${chalk.blue("Software: ")}${config.software}`
      );
      this.log(
        `${chalk.gray("┃ ")}${chalk.blue("Version: ")}${config.version}`
      );
      this.log(
        `${chalk.gray("┃ ")}${chalk.blue("Min. memory: ")}${config.minMemory}`
      );
      this.log(
        `${chalk.gray("┃ ")}${chalk.blue("Max. memory: ")}${config.maxMemory}`
      );
      this.log(
        `${chalk.gray("┃ ")}${chalk.blue("Min. Servers: ")}${config.minServer}`
      );
      this.log(
        `${chalk.gray("┃ ")}${chalk.blue("Max. Servers: ")}${config.maxServer}`
      );
      this.log(
        `${chalk.gray("┃ ")}${chalk.blue("Max. Players: ")}${config.maxPlayers}`
      );
      this.log(`${chalk.gray("┃ ")}${chalk.blue("Port: ")}${config.port}\n`);

      const spinner = ora("Creating Group...").start();

      setTimeout(() => {
        spinner.succeed(chalk.green("Group created!"));
      }, 1500);
    }
  }
}
