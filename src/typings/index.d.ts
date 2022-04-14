// Типизация для Эвентов

import { ColorResolvable } from "discord.js";

export interface EventRun {
  (client: Client, ...args: any[]): void;
}

export interface Event {
  name: string;
  run: EventRun;
}

// Типизация для комманд

type CommandCategory = "Модерация" | "Развлечения" | "Информация";

export interface CommandFunctions {
  embed: any;
  aembed: (
    rustitle: string,
    rusdesc: string,
    color: ColorResolvable,
    imgif?: string
  ) => {};
  colors: {
    default: ColorResolvable;
    error: ColorResolvable;
  };
  handleerror: (
    interaction: Interaction,
    err: any,
    colors: ColorResolvable
  ) => {};
  parseRus: (toTranslate: string) => {};
  getTag: (user: any) => {};
}

export interface CommandRun {
  (interaction: Interaction, client: Client, f: CommandFunctions): void;
}

export interface Command {
  name: string;
  description: string;
  category: Category;
  disabled?: boolean;
  options?: any[];
  run: CommandRun;
}

// Типизация для Конфига

export interface Config {
  token: string;
}

// Другое...

declare module "discord.js" {
  export interface Client {
    cluster: ClusterClient;
    commands: Collection<Command.name, Command>;
    events: Collection<Event.name, Event>;
  }
}
