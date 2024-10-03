import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able count", async () => {
    const total = await prismaClient.customer.count({
      where: {
        name: "Udin Sedunia",
      },
    });

    expect(total).toBe(1);
  });
});
