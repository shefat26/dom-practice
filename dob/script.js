

console.log("Hello World");


let btn1 = document.getElementById("btn-1");

let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");

let state = true;
//console.log(btn1);

btn1.addEventListener("click", (e) => {

if(state === true){

    state = false ;

    btn2.style.backgroundColor = "red"
    btn3.style.backgroundColor = "blue"

}
else{

    state = true

    btn2.style.backgroundColor = "white"
    btn3.style.backgroundColor = "white"
}


    console.log(state);


})



fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => console.log(json))



