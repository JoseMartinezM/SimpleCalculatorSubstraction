function calculate() {
    // Obtener los valores de los inputs
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    // Verificar si los valores son números válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Obtener el operador (puedes expandir para más operaciones)
    let operator = document.getElementById("operator").innerText;

    // Realizar la operación
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operator");
            return;
    }

    // Mostrar el resultado
    document.getElementById("result").innerText = "Result: " + result;
}

function resetFields() {
    // Limpiar los campos de entrada
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "Result:";
}