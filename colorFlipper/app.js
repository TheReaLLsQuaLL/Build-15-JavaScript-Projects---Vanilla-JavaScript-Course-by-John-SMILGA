const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btnEl = document.getElementById("btn");
const color = document.querySelector(".color");

btnEl.addEventListener("click", function(){
    //Get random number between 0-3
    const randomNUmber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNUmber];
    color.textContent = colors[randomNUmber];
})