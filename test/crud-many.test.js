import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', () => {
  it('should be able to create many', async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "johnnull4",
          email: "johnnull4@pzn.com",
          name: "John Khannedy",
          phone: "08999991124"
        },
        {
          id: "doenull4",
          email: "doenull4@pzn.com",
          name: "Doe Khannedy",
          phone: "08999994124"
        }
      ]
    })
    expect(count).toBe(2);
  });

  it('should be able to update many', async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        email: "johnnulllagi@pzn.com"
      }, where: {
        name: "John Doe"
      }
    })

    expect(count).toBe(1);
  });

  it('should be able to delete many', async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: "Tidak Ada"
      }
    })

    expect(count).toBe(0);
  });

  it('should be able to read many', async () => {
    const customers = await prismaClient.customer.findMany({});
    expect(customers.length).toBe(10);
  });


});