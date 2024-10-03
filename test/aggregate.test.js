import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able query using aggregate", async () => {
    const result = await prismaClient.product.aggregate({
      _min: {
        price: true,
      },
      _max: {
        price: true,
      },
      _avg: {
        price: true,
      },
    });

    expect(result._min.price).toBe(1000);
    expect(result._max.price).toBe(5000);
    expect(result._avg.price).toBe(3200);
  });

  it("should be able query using aggregate and group by", async () => {
    const result = await prismaClient.product.groupBy({
      by: ["category"],
      _min: {
        price: true,
      },
      _max: {
        price: true,
      },
      _avg: {
        price: true,
      },
      having: {
        price: {
          _avg: {
            gt: 3000,
          },
        },
      },
    });

    for (const item of result) {
      console.info(`Category: ${item.category},
        min: ${item._min.price},
        max: ${item._max.price},
        avg: ${item._avg.price}`);
    }
  });
});
