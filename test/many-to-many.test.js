import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to create and hace relation many to many", async () => {
    const like = await prismaClient.like.create({
      data: {
        customer_id: "doe",
        product_id: 'P0001'
      },
      include: {
        customer: true,
        product: true
      }
    });

    console.info(like);
  });

  it("should can find one with many relation", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "john"
      },
      include: {
        likes: {
          include: {
            product: true
          }
        }
      }
    });

    console.info(JSON.stringify(customer));
  });

  it("should can find mny with many relation", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        likes: {
          some: {
            product: {
              name: {
                contains: "A"
              }
            }
          }
        }
      },
      include: {
        likes: {
          include: {
            product: true
          }
        }
      }
    });

    console.info(JSON.stringify(customer));
  });

  it("should can create implicit relation", async () => {
    const customer = await prismaClient.customer.update({
      where: {
        id: "john"
      },
      data: {
        loves: {
          connect: [
            { id: "P0001" },
            { id: "P0002" }
          ]
        }
      },
      include: {
        loves: true
      }
    });

    console.info(JSON.stringify(customer));
  });

  it("should can find with implicit relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        loves: {
          some: {
            name: {
              contains: "A"
            }
          }
        }
      },
      include: {
        loves: true
      }
    });

    console.info(JSON.stringify(customers));
  });

});
