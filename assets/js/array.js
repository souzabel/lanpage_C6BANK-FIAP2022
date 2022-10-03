const carrosDom = document.querySelector("#carros")

const veiculos = ["Chevrolet", "Ford", "Fiat", "VW", "Honda", "Toyota", "Hyundai"]

veiculos.forEach((value, key)=>{
    carrosDom.innerHTML += `<option name="${key}">${value}</option>`;
});