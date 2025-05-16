import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const roles = ['USER', 'ADMIN'];

  for (const roleName of roles) {
    await prisma.role.upsert({
      where: { name: roleName },
      update: {},
      create: {
        name: roleName,
      },
    });
  }

  console.log('✅ Roles seeded.');
}

main()
  .catch((e) => {
    console.error('❌ Error while seeding roles:', e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
