let weightSpinner = document.querySelector(".weight-rang")
let spanKG = document.querySelector(".weight-span-kg")
let heightSpinner = document.querySelector(".height-rang")
let spanCM = document.querySelector(".height-span-cm")
let resultSpan = document.querySelector(".result-span")
let BMISpan = document.querySelector(".BMI-span")

spanCM.innerHTML = heightSpinner.value + "cm"
spanKG.innerHTML = weightSpinner.value + "kg"

weightSpinner.addEventListener("input", function () {
    spanKG.innerHTML = weightSpinner.value + "kg"
    updateResult()
})
heightSpinner.addEventListener("input", function () {
    spanCM.innerHTML = heightSpinner.value + "cm"
    updateResult()
})
function updateResult() {
    let weight = Number.parseInt(weightSpinner.value)
    let height = Number.parseInt(heightSpinner.value)
    let BMI = weight / ((height / 100) * (height / 100))
    BMISpan.innerHTML = "BMI: " + BMI.toFixed(1)
    if(BMI < 18.5) {
        resultSpan.innerHTML = "Underweight"
        resultSpan.style.cssText = "color: yellow; filter: drop-shadow(2px 2px 2px yellow);"
    }
    else if(BMI > 18.5 && BMI <= 24.9) {
        resultSpan.innerHTML = "Healthy Weight"
        resultSpan.style.cssText = "color: green; filter: drop-shadow(2px 2px 2px green);"
    }
    else if(BMI > 24.9 && BMI < 29.9) {
        resultSpan.innerHTML = "Overweight"
        resultSpan.style.cssText = "color: orange; filter: drop-shadow(2px 2px 2px green);"
    }else {
        resultSpan.innerHTML = "Obese"
        resultSpan.style.cssText = "color: red; filter: drop-shadow(2px 2px 2px red);"
    }
}