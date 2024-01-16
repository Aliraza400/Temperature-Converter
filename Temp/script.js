const myNum = document.getElementById("myNum");

const toFahrenheit = document.getElementById("toFahrenheit");

const toCelcius = document.getElementById("toCelcius");

let result = document.getElementById("result");

let temp;

function clicked() {
  
  if(toFahrenheit.checked) {

    temp = Number(myNum.value);
    temp = temp * 9/5 + 32;
    result.textContent = temp.toFixed(1) + "℉";
  }
  else if(toCelcius.checked) {

    temp = Number(myNum.value);
    temp = (temp - 32) * (5/9);
    result.textContent = temp.toFixed(1) + "℃";
  }
  else {

    result.textContent = `Select a Unit`;
  }

}