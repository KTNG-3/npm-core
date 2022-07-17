//import

import type { ICommand } from '../main';

import { format as TextFormat } from 'util';

//export

export default {
  data: {
    name: "echo <data>",
    description: "Echo the given data",
    option: [
      {
        name: "-e, --error <error>",
        description: "Echo the given data as error",
      },
    ],
  },
  //script
  async execute(data: any, { error }: { error: any }): Promise<any> {
    console.log(TextFormat(data));

    if (error) {
      console.error(new Error(error));
    }
  },
} as ICommand;
