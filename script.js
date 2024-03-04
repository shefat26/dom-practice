

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




//////////////////////////////////////
//////////////////////////////////////

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





////////////////////////////////////
////////////////////////////////////

// Query selector

let pTag = document.querySelector('.think');

console.log(pTag);



// let newPtag = document.querySelector('#build');

// console.log(newPtag);


// selecting tag elemnt child

// let lastItem = document.querySelector('.item:last-child');

// lastItem.style.color = 'red';


// when we want to select nth child, we can use nth-child

// let lastItem2 = document.querySelector('.item:nth-child(1)');

// lastItem2.style.color = 'yellow';



// let lastItem3 = document.querySelectorAll('.item:last-child');


// lastItem3.style.color = 'yellow';




/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////



// lession-4

// Traversing dOM



// selecting children from the div element


let parent = document.querySelector('#uif')

let child = parent.children;

console.log(child);

console.log(child[1]);



//

let grandParent = document.querySelector('.fourth')

let parent1 = grandParent.children;

let child1 = parent1[1].children;

console.log(child1);




// Selecting children within the grand parent tag directly


let grandParent1 = document.querySelector('.fourth');

let children1 = grandParent1.querySelectorAll('.newcla');

console.log(children1);





///

// if we want to select from children to parent


let children3 = document.querySelector('.newcla');

let parent3 = children3.parentElement;

console.log(parent3);




// if we want to select from children to GrandParent


let children4 = document.querySelector('.newcla');

let grandparent = children4.closest('.fourth');

console.log(grandparent);



// selecting children or siblings

let childrenOne = document.querySelector('.newcla');

let childrenTwo = childrenOne.nextElementSibling;

//console.log(childrenTwo);

childrenTwo.style.color = 'blue';

console.log(childrenTwo);



// if we want to go to childrenTwo to ChildrenOne


// let childrenTwoPrev = document.querySelector('.newcla')

// nextElementSibling;

// let childrenOnePrev = childrenTwoPrev.previousElementSibling;

// childrenOnePrev.style.color = 'blue';








/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////



// LESSON - 5

// Dom Manipulating




// Creating div element index file from dom 



//STEP-1
let divElement = document.createElement('div');

//console.log(divElement);

// Adding Class Name
divElement.className = 'prevCla'

// addaing id in div 
divElement.setAttribute('id', 'prev');

divElement.setAttribute('id', 'prev Div');



// STEP-2

// place we want to put  the above div elemnt

let container = document.querySelector('.know');



//STEP-3
// Before which html tag we want to plug the new div element, 
//  here we selected <h3></h3>

let h3Element = container.querySelector('h3');



// STEP-4
// Now plug the new div element and enter <h3> tag
container.insertBefore(divElement, h3Element)
















