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

export async function main() {
  for (const p of productData) {
    await prisma.product.create({ data: p });
  }

  console.log("Database seeded successfully!");
  
}

main();