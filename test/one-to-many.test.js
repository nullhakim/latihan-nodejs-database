import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to create one to many", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: "udin",
        title: "Insert comment",
        description: "Description comment",
      },
      include: {
        customer: true,
      },
    });

    console.info(comment);
  });

  it("should cacn insert and many relations ", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "alex",
        name: "Alex",
        email: "alex@pzn.com",
        phone: "263848340",
        comment: {
          createMany: {
            data: [
              {
                title: "Insert comment 1",
                description: "Description comment 1",
              },
              {
                title: "Insert comment 2",
                description: "Description comment 2",
              },
            ],
          },
        },
      },
      include: {
        comment: true,
      },
    });

    console.info(customer);
  });

  it("should can find many with relations", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        comment: {
          some: {
            title: {
              contains: "comment",
            },
          },
        },
      },
      include: {
        comment: true,
      },
    });

    console.info(customers);
  });
});
