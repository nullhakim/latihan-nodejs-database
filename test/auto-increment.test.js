import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to create category auto increment", async () => {
    const category = await prismaClient.category.create({
      data: {
        name: "Food",
      },
    });

    console.info(category);
    expect(category).toHaveProperty("id");
  });
});
