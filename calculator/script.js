const formulaDisplay = document.getElementById("formula");
const inputDisplay = document.getElementById("display");

let currentValue = "";
let valueArr = [];
let isExeFinished = false;

const operators = ["+", "-", "*", "/"];


const clearOutput = () => {
    currentValue = "0";
    valueArr = [];
    display();
}

const appendToOutput = (value) => {
    if (value === "AC") {
        currentValue = "";
        valueArr = [];
        isExeFinished = false;
        display();
    } else if (value === "=") {
        execute();
    } else if (operators.includes(value)) {
        if (isExeFinished) {
            valueArr = [];
            valueArr.push(currentValue);
            isExeFinished = false;
        }
        handleOperatorsInput(value);
    } else {
        if (isExeFinished) {
            valueArr = [];
            currentValue = "";
            isExeFinished = false;
        }

        if (value === ".") {
            if (currentValue.includes(".")) {
                return;
            } else if (operators.includes(currentValue) || !currentValue) {
                currentValue = "0.";
            } else {
                valueArr.pop();
                currentValue += value;
            }
            valueArr.push(currentValue);
            display();

        } else {
            handleNumbersInput(value);
        }
    }      
}


const execute = () => {
    try {
        const result = eval(valueArr.join(""));
        if (!isNaN(result)) {
            valueArr.push("=");
            currentValue = result.toString();
            valueArr.push(currentValue);
            isExeFinished = true;
        } else {
            throw new Error("Invalid expression");
        }
    } catch (error) {
        console.error("Error:", error.message);
        currentValue = "NAN";
        isExeFinished = true;
    }
    display();
}

const handleOperatorsInput = (value) => {
 
    if (currentValue === value) {
        return;
    } 
        
    if (value === "/" || value === "*" || value === "+") {
        if (operators.includes(currentValue) || currentValue.slice(-1) === ".") {
            valueArr.pop();
            if (operators.includes(valueArr[valueArr.length - 1])) {
                valueArr.pop();
            }
        }
        currentValue = value; 

    } else {
        if (currentValue.slice(-1) === ".") {
            valueArr.pop();  
        }
        currentValue = value
    }  

    valueArr.push(currentValue);
    display();
};

const handleNumbersInput = (value) => {
    if (value === "0" && currentValue === "0") {
        return;
    }
    
    if (valueArr[valueArr.length - 1] === "0") {
        valueArr.pop();
    }
    
    if (currentValue === "0" || operators.includes(currentValue)) {
        currentValue = value;
    } else {
        valueArr.pop();
        currentValue += value;
    } 

    valueArr.push(currentValue);
    display();
}

const display = () => {
    const formula = valueArr.join("");
    formulaDisplay.textContent = formula;
    inputDisplay.textContent = currentValue;
}


