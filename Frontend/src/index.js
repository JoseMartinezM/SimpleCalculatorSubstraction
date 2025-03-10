let operator = '+';

function setOperator(op) {
  operator = op;
}

function calculate() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
  }

  const endpoint = operator === '+' ? 'add' : 'sub';
  
  const url = `http://localhost:8080/${endpoint}?num1=${num1}&num2=${num2}`;
  
  document.getElementById("result").innerText = "Calculating...";
  
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("result").innerText = "Result: " + data.result;
    })
    .catch(error => {
      console.error('Error during fetch operation:', error);
      document.getElementById("result").innerText = "Error: Could not connect to server";
    });
}

function resetFields() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerText = "Result:";
}