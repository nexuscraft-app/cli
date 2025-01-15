import { Command } from "@oclif/core";
import chalk from "chalk";
import CliTable3 from "cli-table3";

export default class Groups extends Command {
  static override description = "list all groups";

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    const table = new CliTable3({
      colWidths: [10, 20, 40, 10],
      head: [
        chalk.yellow("ID"),
        chalk.yellow("Name"),
        chalk.yellow("Description"),
        chalk.yellow("Online"),
      ],
    });

    table.push(["1", "Lobby", "the fallback group", "1/5"]);

    this.log(table.toString());
  }
}
