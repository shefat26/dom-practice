

console.log("Hello World")




let arr = [
    {
      names: "James",
      game: "soccer",
      age: 30,
      position: "strike",
      income: 40000,
      gender: "Male",
    },
    {
      names: "Jonson",
      game: "soccer",
      age: 35,
      position: "strike",
      income: 50000,
      gender: "Male",
    },
    {
      names: "Lily",
      game: "soccer",
      age: 25,
      position: "strike",
      income: 30000,
      gender: "female",
    },
    {
      names: "Sara",
      game: "soccer",
      age: 23,
      position: "strike",
      income: 20000,
      gender: "female",
    },
  ];

  
  let mapping = arr.map((e) => {

    return {
         ...e,

         status: e.income > 20000 ? "Upper class" : "Lower class",

         senior: e.age >25 ,

    
        
        }

  })

console.log(mapping);


//checking document
console.dir(document)

console.log(typeof(document))


//check title
console.log(document.title);
console.log()
console.log()




