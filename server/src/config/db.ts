import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("Successfully connected to the DB");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
