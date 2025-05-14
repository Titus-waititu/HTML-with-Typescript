"use strict";
//get elements
const btn = document.getElementById('submit');
const input = document.getElementById('numberInput');
const result = document.getElementById('result');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const value = input.value;
    result.textContent = value.toString();
});
