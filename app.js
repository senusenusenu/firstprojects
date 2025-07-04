console.log(10)

const result = document.getElementById('res2')
const input1 = document.getElementById('first')
const input2 = document.getElementById('second')
const submit = document.getElementById('sub')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
let action = '+'


plus.onclick = function () {
    action = '+'
}

minus.onclick = function () {
    action = '-'
}

submit.onclick = function () {
    if (action == '+') {
        const sum = Number(input1.value) + Number(input2.value)
        result.textContent = sum
        result.style.color = 'green'
    } else {
        const sum = Number(input1.value) - Number(input2.value)
        result.textContent = sum
        result.style.color = 'red'
    }
}

submit.onclick = function () {
    
    action == '+' ? result.textContent = Number(input1.value) + Number(input2.value)
    : result.textContent = Number(input1.value) - Number(input2.value)

    action == '+' ? result.style.color = 'green' : result.style.color = 'red'
    


    // if (action == '+') {
    //     const sum = Number(input1.value) + Number(input2.value)
    //     result.textContent = sum
    //     result.style.color = 'green'
    // } else {
    //     const sum = Number(input1.value) - Number(input2.value)
    //     result.textContent = sum
    //     result.style.color = 'red'
    // }
}

// submit.onclick=function(){
//     const sum=Number(input1.value)+Number(input2.value)
//     resultElement.textContent = sum
// }