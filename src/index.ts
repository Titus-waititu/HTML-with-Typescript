//get elements

const btn = document.getElementById('submit') as HTMLButtonElement
const input = document.getElementById('numberInput') as HTMLInputElement
const result = document.getElementById('result') as HTMLHeadingElement


btn.addEventListener('click',(e) => {
    e.preventDefault();
    const value = input.value
    result.textContent = value.toString()
})