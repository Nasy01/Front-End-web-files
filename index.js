const firstInp = document.getElementById("first-inp");
const secondInp = document.getElementById("second-inp");
const responseEL = document.getElementById("text");
const enterBtn = document.getElementById("enter-btn");

enterBtn.addEventListener("click", ()=> {
let amount = parseInt(firstInp.value, 10);
firstInp.value = ""
let age = parseInt(secondInp.value, 10);
secondInp.value = ""
let message = "";

if(amount === 500 && age === 18){
    message = "You are welcome to Klobb X Night club"
    responseEL.textContent = message
} else if(amount === 500 && age != 18) {
    message = "You are welcome to Klobb X Night club"
    responseEL.textContent = message
} else{
    message = "You are not permitted, Thanks for coming"
    responseEL.textContent = message
}

})