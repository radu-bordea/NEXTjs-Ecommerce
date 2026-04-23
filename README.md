# starte
- npx create-next-app@latest nextjs-ecommerce-model

# shadcn
- npx shadcn@latest init
- npx shadcn@latest add button
- npx shadcn@latest dropdown-menu
- npx shadcn@latest sheet
- npx shadcn@latest card
- npx shadcn@latest add badge


# libraries
- npm i lucide-react
- npm i next-themes
- npm i zod
- npm i @neondatabase/serverless @prisma/adapter-neon ws
- npm i -d @types/ws bufferutil
- npm i bcrypt-ts-edge

# prisma instalations
- npm install prisma tsx @types/pg --save-dev
- npm install @prisma/client @prisma/adapter-pg dotenv pg

# prisma initialiation
- npx prisma init --output ../app/generated/prisma

// add this line in package.json scripts
- "postinstall": "prisma generate"
- npx prisma migrate dev --name init
- npx prisma generate
// add this line in migrations in the prisma.config file
- seed: `tsx prisma/seed.ts`,
- npx prisma db seed
- npx prisma migrate dev --name add_user_based_tables