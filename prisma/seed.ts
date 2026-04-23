import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import sampleData from "../db/sample-data";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const productData: Prisma.ProductCreateInput[] = sampleData.products
const userData: Prisma.UserCreateInput[] = sampleData.users

export async function main() {
  await prisma.user.deleteMany();
  await prisma.product.deleteMany();

  for (const p of productData) {
    await prisma.product.create({ data: p });
  }

  for (const u of userData) {
    await prisma.user.create({ data: u });
  }

  console.log("Database seeded successfully!");
  
}

main();