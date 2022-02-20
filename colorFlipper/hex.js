const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btnEl = document.getElementById("btn");
const color = document.querySelector(".color");

btnEl.addEventListener("click", function(){
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        let letter = Math.floor(Math.random() * hex.length);
        hexColor += hex[letter];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})