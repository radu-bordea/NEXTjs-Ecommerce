# starte
- npx create-next-app@latest nextjs-ecommerce-model

# shadcn
- npx shadcn@latest init
- npx shadcn@latest add button
- npx shadcn@latest dropdown-menu
- npx shadcn@latest sheet
- npx shadcn@latest card


# libraries
- npm i lucide-react
- npm i next-themes

# prisma instalations
- npm install prisma tsx @types/pg --save-dev
- npm install @prisma/client @prisma/adapter-pg dotenv pg

# prisma initialiation
- npx prisma init --output ../app/generated/prisma

// add this line in package.json scripts
- "postinstall": "prisma generate"
- npx prisma migrate dev --name init
- npx prisma generate