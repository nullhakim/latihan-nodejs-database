import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', () => {
  it('should can execute sequential transaction', async () => {
    const [john, doe] = await prismaClient.$transaction([

      prismaClient.customer.create({
        data: {
          id: "johnnull",
          email: "johnnull@pzn.com",
          name: "John Khannedy",
          phone: "0899999112"
        }
      }),

      prismaClient.customer.create({
        data: {
          id: "doenull",
          email: "doenull@pzn.com",
          name: "Doe Khannedy",
          phone: "0899999232"
        }
      })
    ])

    expect(john.id).toBe("johnnull");
    expect(john.email).toBe("johnnull@pzn.com");
    expect(john.name).toBe("John Khannedy");
    expect(john.phone).toBe("0899999112");

    expect(doe.id).toBe("doenull");
    expect(doe.email).toBe("doenull@pzn.com");
    expect(doe.name).toBe("Doe Khannedy");
    expect(doe.phone).toBe("0899999232");

  });

  it('should can execute interactive transaction', async () => {
    const [john, doe] = await prismaClient.$transaction(async (prisma) => {
      const john = await prisma.customer.create({
        data: {
          id: "johnnull2",
          email: "johnnull2@pzn.com",
          name: "John Khannedy",
          phone: "08999991122"
        }
      });

      const doe = await prisma.customer.create({
        data: {
          id: "doenull2",
          email: "doenull2@pzn.com",
          name: "Doe Khannedy",
          phone: "08999992322"
        }
      });

      return [john, doe];
    })

    expect(john.id).toBe("johnnull2");
    expect(john.email).toBe("johnnull2@pzn.com");
    expect(john.name).toBe("John Khannedy");
    expect(john.phone).toBe("08999991122");

    expect(doe.id).toBe("doenull2");
    expect(doe.email).toBe("doenull2@pzn.com");
    expect(doe.name).toBe("Doe Khannedy");
    expect(doe.phone).toBe("08999992322");

  });
})