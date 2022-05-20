import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
// import crypto from 'crypto';
// const id = crypto.randomBytes(20).toString('hex');

async function main() {
  const dataArr = [];

  for (let index = 0; index < 1000; index++) {
    dataArr.push(
      prisma.raffleDraw.create({
        data: {
          code: (Math.random() + 1).toString(36).substring(5),
        },
      }),
    );
  }
  const success = await Promise.all(dataArr);
  console.log(success);

  //   await prisma.raffleDraw.create({
  //     data: dataArr,
  //   });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
