const tipRange = document.querySelector(".tip")
const tipValue = document.querySelector(".tip-value")
const total = document.querySelector(".total")
const check = document.querySelector(".check")
const confirm = document.querySelector(".confirm")
const confirmation = document.querySelector(".confirmation")
tipRange.addEventListener("input", () => {
    tipValue.innerHTML = tipRange.value
    console.log("check " + check.value)

    let tip = 1+(tipRange.value / 100)
    console.log("tip " + tip)
    console.log(tipRange.value)
    
    total.value = check.value*tip
});
confirm.addEventListener("click", () => {
    tipValue.innerHTML = tipRange.value

    let tip = 1+(tipRange.value / 100)
    
    total.value = check.value*tip
    console.log(total)
    confirmation.children[0].innerHTML = "Your total is: " + total.value   
})

