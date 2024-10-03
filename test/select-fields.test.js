import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to create and select", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "udin",
        email: "budi@pzn.com",
        phone: "0897652417",
        name: "Udin Sedunia",
      },
      select: {
        id: true,
        name: true,
      },
    });

    expect(customer.id).toBe("udin");
    expect(customer.name).toBe("Udin Sedunia");
    expect(customer.email).toBeUndefined();
    expect(customer.phone).toBeUndefined();
  });

  it("should be able find many with select", async () => {
    const customers = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    for (const customer of customers) {
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customer.email).toBeUndefined();
      expect(customer.phone).toBeUndefined();
    }
  });
});
