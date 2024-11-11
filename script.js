const colorForm = document.querySelector(".color-form");
const colorSections = document.querySelectorAll(".color-section");
const apiURL = "https://www.thecolorapi.com/";

colorForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const seedColorHex = document.querySelector("input[type='color']").value;
    const seedColor = seedColorHex.slice(1);
    const mode = document.querySelector("#mode-selector").value;


    fetch(`${apiURL}scheme?hex=${seedColor}&mode=${mode}&count=6`)
        .then(res => res.json())
        .then(data => renderPalette(data));
})

function renderPalette(colorObjects) {
    for(let i = 0; i < 6; i++) {
        colorSections[i].style.backgroundColor = colorObjects.colors[i].hex.value;
        document.querySelector(`.color-code-${i+1}`).textContent = colorObjects.colors[i].hex.value;
    }
}

fetch(`${apiURL}scheme?hex=8673A1&mode=monochrome&count=6`)
    .then(res => res.json())
    .then(data => renderPalette(data));