import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to create one to one", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: "john",
        customer_id: "udin",
        balance: 1000000,
      },
      include: {
        customer: true,
      },
    });

    console.info(wallet);
  });

  it("should be able to create one to one with relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "budi",
        name: "Budi",
        phone: "08762536716",
        email: "budixx@pzn.com",
        wallet: {
          create: {
            id: "budi",
            balance: 2000000,
          },
        },
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });

  it("should be able to find one to one", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "udin",
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });

  it("should be able to find manu one to one", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null,
        },
      },
      include: {
        wallet: true,
      },
    });

    console.info(customers);
  });
});
