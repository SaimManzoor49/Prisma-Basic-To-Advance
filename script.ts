import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {

const user = await  prisma.user.deleteMany({})

    console.log(user)

}

main()
  .catch((e) => {
    console.log(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
