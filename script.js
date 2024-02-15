

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

// check URL
//console.log(document.URL)

// CHECK DOMAIN
//console.log(document.domain)

//check header 
//console.log(document.head)

//check body, not able to see html  body structure
//console.log(document.body)


//console.log(document.all);


// find images through dom

//console.log(document.images);


// find links through dom

//console.log(document.links);


// find forms through dom

//console.log(document.forms);








// using for of loop

// for(let element of document.all){

//     console.log(element)
// }

// changing Title dynamically from script file

document.title = "Play with DOM"




/////////////////////////////////
////////////////////////////////
////////////////////////////////





// LESSION #3 - Traversing Dom Elements


// Selecting Document Element

console.log(document.getElementById("hero"))



//// Selecting Document Element and changing the element



let rocketElement = document.getElementById("rockets")

//rocketElement.textContent = "Acme Rockets Fly"

// we can also use inner text
rocketElement.innerText = "Acme Rockets Fly"

// if we want to look for text with html, we can't see the html tags here
console.log(rocketElement.innerHTML) 









