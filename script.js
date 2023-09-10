
let number = document.querySelector("#number")
number.value = 20
let userInput = number.value
let length = document.querySelector("#length")
let volume = document.querySelector("#volume")
let mass = document.querySelector("#mass")
const btn = document.querySelector("#convert-btn")

function convertLength() {
  length.innerHTML =  `${userInput} meters = ${(userInput*3.281).toFixed(3)} feet | ${userInput} feet = ${(userInput/3.281).toFixed(3)} meters`
}

function convertVolume() {
    volume.innerHTML =  `${userInput} liters = ${(userInput*0.264).toFixed(3)} gallons | ${userInput} gallons = ${(userInput/0.264).toFixed(3)} liters`
  }

function convertMass() {
    mass.innerHTML =  `${userInput} kilograms = ${(userInput*2.204).toFixed(3)} pounds | ${userInput} pounds = ${(userInput/2.204).toFixed(3)} kilograms`
}

convertLength()
    convertMass()
    convertVolume()

btn.addEventListener("click", function() {
    userInput = number.value
    convertLength()
    convertMass()
    convertVolume()
}
)


// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

number.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btn.click();
  }
});