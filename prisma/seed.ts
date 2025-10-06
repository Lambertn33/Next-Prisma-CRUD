import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    name: "Wireless Bluetooth Headphones",
    price: 7999,
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    name: "Smartphone Case",
    price: 2499,
    description: "Protective case with shock absorption"
  },
  {
    name: "USB-C Cable",
    price: 1299,
    description: "Fast charging cable, 6ft length"
  },
  {
    name: "Wireless Mouse",
    price: 3499,
    description: "Ergonomic wireless mouse with precision tracking"
  },
  {
    name: "Laptop Stand",
    price: 4599,
    description: "Adjustable aluminum laptop stand for better ergonomics"
  },
  {
    name: "Mechanical Keyboard",
    price: 8999,
    description: "RGB backlit mechanical keyboard with blue switches"
  },
  {
    name: "Monitor Stand",
    price: 3299,
    description: "Height-adjustable monitor stand with cable management"
  },
  {
    name: "Webcam",
    price: 6999,
    description: "4K webcam with built-in microphone and privacy shutter"
  },
  {
    name: "Desk Lamp",
    price: 1899,
    description: "LED desk lamp with adjustable brightness and color temperature"
  },
  {
    name: "Power Bank",
    price: 3999,
    description: "10000mAh portable power bank with fast charging"
  }
];

async function main() {
  console.log("Starting to seed products...");
  
  for (const product of products) {
    await prisma.product.create({
      data: product
    });
  }
  
  console.log("Successfully seeded 10 products!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
