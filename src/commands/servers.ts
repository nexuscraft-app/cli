import { Command } from "@oclif/core";
import chalk from "chalk";
import CliTable3 from "cli-table3";
import ora from "ora";

export default class Servers extends Command {
  static override description = "list all servers";

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    const spinner = ora("Loading servers...").start();

    const table = new CliTable3({
      colWidths: [10, 20, 40, 10],
      head: [
        chalk.yellow("ID"),
        chalk.yellow("Name"),
        chalk.yellow("Description"),
        chalk.yellow("Group"),
      ],
    });

    table.push(["1", "Lobby-1", "the fallback group", "Lobby"]);

    setTimeout(() => {
      spinner.succeed(table.toString());
    }, 1500);
  }
}
