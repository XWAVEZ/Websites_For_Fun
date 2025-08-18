// clears calculator display
function clearScreen() {
    document.getElementById("result").value = "";
}

// appending numbers/operators
function setScreenValue(value) {
    document.getElementById("result").value += value;
}

// calculate result
function calculateResult() {
    const resEl = document.getElementById("result");
    const exp = resEl.value.trim();

    // check empty input
    if (exp === '') {
        resEl.value = "Enter expression";
        return;
    }

    try {
        resEl.value = eval(exp);
    } catch (e) {
        resEl.value = "Invalid";
    }
}
