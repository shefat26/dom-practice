

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

//console.log(mapping);


//checking document
//console.dir(document)

//console.log(typeof(document))


//check title
//console.log(document.title);

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


// Selecting Document Element by id 

let doc = document.getElementById("hero")

console.log(doc)



//// Selecting Document Element and changing the element



let rocketElement = document.getElementById("rockets")

//rocketElement.textContent = "Acme Rockets Fly"

// we can also use inner text
rocketElement.innerText = "Acme Rockets Fly"

// if we want to look for text with html, we can't see the html tags here
console.log(rocketElement.innerHTML) 



// if we want to change the element style

 rocketElement.style.color= "red" ;

 // change element font size
 rocketElement.style.fontSize= "30px" ;


//console.dir(document)



// to get the class element by  class name and index num

console.log(document.getElementsByClassName('item'))

//console.log(document.getElementsByClassName('item')[2])


// using for loop to change the class= "item" element


let items = document.getElementsByClassName('item');

for( let i=0; i<items.length; i++){

  items[i].style.color = 'blue';

}


// using for loop to change the id= "second" element


// let sectionID = document.getElementsById('hero')

// let ite = sectionID.getElementsByClassName('item');

// for(let i = 0; i<ite.length; i++){

//   // ite[i].style.color= 'green' ;

// }



// selecting tag element


let anItem = document.getElementsByTagName('p')

console.log(anItem);


let aTag = document.getElementsByTagName('a')

console.log(aTag);



// Query selector

let pTag = document.querySelector('.think');

console.log(pTag);



let newPtag = document.querySelector('#build');

console.log(newPtag);











