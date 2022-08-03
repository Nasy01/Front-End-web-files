const resultEl = document.getElementById("output-text");

const increaseBtn = document.getElementById("increase-btn");

const enterBtn = document.getElementById("enter-btn");

const pValue = document.getElementById("pre-value");

let count = 0;

increaseBtn.addEventListener("click", function() {
    count+= 1;
    resultEl.textContent = count;
})

enterBtn.addEventListener("dblclick", function() {
    pValue.textContent+= count + "-";
    count = 0;
    resultEl.textContent = count;
})