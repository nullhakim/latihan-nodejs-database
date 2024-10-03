import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it('should be abel to execute sql', async () => {
    const id = "2";
    const name = "John Doe";

    const impacted = await prismaClient.$executeRaw`INSERT INTO sample(id, name) VALUES (${id}, ${name})`;
    expect(impacted).toBe(1);
  });
})