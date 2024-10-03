import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it('should be abel to quesy sql', async () => {
    const id = "2";

    const samples = await prismaClient.$queryRaw`SELECT * FROM sample WHERE id = ${id}`;

    for (const sample of samples) {
      console.info(`Result sample id : ${sample.id} and name ${sample.name}`);
    }
  });
})