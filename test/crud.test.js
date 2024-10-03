import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {

  //CREATE CUSTOMER
  it('should be able to create customer', async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "doenulll7",
        email: "doe7777@pzn.com",
        name: "John Doe Null",
        phone: "08555555553274777"
      }
    })

    expect(customer.id).toBe("doenulll7");
    expect(customer.email).toBe("doe7777@pzn.com");
    expect(customer.name).toBe("John Doe Null");
    expect(customer.phone).toBe("08555555553274777");

  });

  //UPDATE CUSTOMER
  it('should be able to update customer', async () => {
    const customer = await prismaClient.customer.update({
      data: {
        name: "John Doe Null"
      },
      where: {
        id: "Doe"
      }
    })

    expect(customer.id).toBe("Doe");
    expect(customer.email).toBe("doe@pzn.com");
    expect(customer.name).toBe("John Doe Null");
    expect(customer.phone).toBe("0855555555");

  });

  //READ CUSTOMER
  it('should be able to read customer', async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "Doe"
      }
    })

    expect(customer.id).toBe("Doe");
    expect(customer.email).toBe("doe@pzn.com");
    expect(customer.name).toBe("John Doe Null");
    expect(customer.phone).toBe("0855555555");

  });

  //DELETE CUSTOMER
  it('should be able to delete customer', async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "Doe"
      }
    })

    expect(customer.id).toBe("Doe");
    expect(customer.email).toBe("doe@pzn.com");
    expect(customer.name).toBe("John Doe Null");
    expect(customer.phone).toBe("0855555555");

  });


})