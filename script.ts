import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  //Delete users
  // await prisma.user.deleteMany({})
  //to create multiple users
  // const users = await prisma.user.createMany({data:[{},{},{}]})
  //to create a user
  // const user = await  prisma.user.create({
  //     data:{
  //         name:"saim",
  //         email:"saim@gmail.com",
  //         age:22,
  //         userPreference:{
  //             create:{
  //                 emailUpdates:true
  //             }
  //         }
  //     },
  //     // include:{
  //     //     userPreference:true
  //     // }
  //     select:{
  //         name:true,
  //         userPreference:{select:{id:true}}
  //     }
  // })
  // find a unique user // must have unique attribute
  // const user = await prisma.user.findUnique({
  //     where:{
  //         // email:'saim@gmail.com'
  //         age_name:{
  //             age:22,
  //             name:"saim"
  //         }
  //     }
  // })
  // find a many users returns an array
  // const user = await prisma.user.findMany({
  //     where:{
  //         // email:'saim@gmail.com'
  //         name:"saim"
  //     }
  // })
  //find a many users returns an array using distinct same name but diff email
  //   const user = await prisma.user.findMany({
  //     where: {
  //       // email:'saim@gmail.com'
  //       // name:"saim"
  //       // name:{not:"saim"} // whose name is not saim
  //       // name:{in:["saim","talha"]} // whose name is any of given one
  //       // name:{notIn:["saim","talha"]} // whose name is any of given one
  //       /* name:"saim",
  //              age:{lt:20} // lessThen , will perform and (&&) query */
  //       //  email:{contains:'gmail'} // check for substring in string
  //       //  email:{endsWith:'@edu.com'} // check if the user mail is edu or not
  //       // AND:[{name:'saim'},{email:"saim@gmail.com"}]
  //       // OR:[{name:'saim'},{email:"saim@gmail.com"}]
  //       // NOT:[{name:'saim1'},{email:"saim@gmail1.com"}]
  //       /*   writtenPosts:{
  //                 every:{
  //                     // createdAt:new Date()
  //                     // title:'test'
  //                 }
  //             } */
  //     },
  //     // distinct:["name","age"]
  //     // take :2 // will return only 2 instances
  //     // skip:1 // skip 1st instance
  //     // orderBy:{age:'asc'}  // sorting
  //   });

    // almost same for update many all will be updated
  const user = await prisma.user.update({
    data:{
        // email:"saim1@gmail.com"
        // age :{ decrement:1}
        // connect or disconnet optional models

    },
    where:{
        // email:"saim@gmail.com"
        email:"saim1@gmail.com"
    }
  })


    console.log(user);
}

main()
  .catch((e) => {
    console.log(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
