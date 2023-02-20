import { PrismaClient } from "@prisma/client";

export default function (connection: Function) {
  const client: PrismaClient = new PrismaClient();

  connection(client)
    .then(async () => {
      console.log(`Ending prisma connection `);
      client.$disconnect();
    })
    .cathc(async (e: Error) => {
      console.log(`Ended Abrut `);
      console.log(e.stack);
      client.$disconnect();
      process.exit(1);
    });
}
