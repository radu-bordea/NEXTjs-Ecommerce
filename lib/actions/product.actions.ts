'use server'

import prisma from "@/lib/prisma";

// Get latest products
export async function getLatestProducts() {
    try {
        const data = await prisma.product.findMany({
            take: 4,
            orderBy: { createdAt: 'desc' },
        })

        return data
    } catch (error) {
        console.error("Error fetching latest products:", error)
        throw new Error("Failed to fetch latest products")
    }
}