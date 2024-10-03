import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able use where condition for find products", async () => {
    const products = await prismaClient.product.findMany({
      where: {
        OR: [{ name: "A" }, { name: "B" }],
      },
      orderBy: [
        {
          name: "asc",
        },
      ],
    });

    expect(products).toHaveLength(2);
    expect(products[0].name).toBe("A");
    expect(products[1].name).toBe("B");
  });
});
