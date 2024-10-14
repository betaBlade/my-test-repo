import {age} from "./ageSpace.js";

document.querySelector('#btnCalculate').addEventListener('click', (event) => {
    let planet = document.getElementById('txtPlanet').value;
    let seconds = document.getElementById('numSeconds').value;
    document.getElementById('txtAge').value = age(planet, seconds);
}, false);
