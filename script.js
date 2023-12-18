let currentNumber = 0;

function add() {
    let inputValue = Number(document.getElementById('input_basic').value);
    if (isNaN(inputValue)) {
        alert("Invalid input. Please enter a number.");
    } else {
        currentNumber += inputValue;
        document.getElementById('input_basic').value = "";
        document.getElementById('basic_sol').textContent = currentNumber;
    }
  }

function subtract() {
    let inputValue = Number(document.getElementById('input_basic').value);
    if (isNaN(inputValue)) {
        alert("Invalid input. Please enter a number.");
    } else {
        currentNumber -= inputValue;
        document.getElementById('input_basic').value = "";
        document.getElementById('basic_sol').textContent = currentNumber;
    }
  }

  function multiply() {
    let inputValue = Number(document.getElementById('input_basic').value);
    if (isNaN(inputValue)) {
        alert("Invalid input. Please enter a number.");
    } else {
        currentNumber *= inputValue;
        document.getElementById('input_basic').value = "";
        document.getElementById('basic_sol').textContent = currentNumber;
    }
  }

  function divide() {
   let inputValue = Number(document.getElementById('input_basic').value);
   if(inputValue === 0) {
     document.getElementById('basic_sol').textContent = "undefined";
   } else if (isNaN(inputValue)) {
       alert("Invalid input. Please enter a number.");
   } else {
       currentNumber /= inputValue;
       document.getElementById('input_basic').value = "";
       document.getElementById('basic_sol').textContent = currentNumber;
   }
}

function rectangleArea() {
   let length = Number(document.getElementById('input_rec_l').value);
   let width = Number(document.getElementById('input_rec_w').value);
   if (length < 0 || width < 0) {
       document.getElementById('rec_sol').innerText = "Cannot have a side-length of negative value";
       return;
   }
   let area = length * width;
   document.getElementById('rec_sol').innerText = area;
}
 
 function rectanglePerimeter() {
    let length = Number(document.getElementById('input_rec_l').value);
    let width = Number(document.getElementById('input_rec_w').value);
    let perimeter = 2 * (length + width);
    if (length < 0 || width < 0) {
      document.getElementById('rec_sol').innerText = "Cannot have a side-length of negative value";
      return;
    }
    document.getElementById('rec_sol').innerText = perimeter;
 }

 function triangleArea() {
    let length = Number(document.getElementById('input_tri_l').value);
    let altitude = Number(document.getElementById('input_tri_a').value);
    let area = 0.5 * length * altitude;
    if (length < 0 || altitude < 0) {
      document.getElementById('tri_sol').innerText = "Cannot have a side-length or altitude of negative value";
      return;
    }
    document.getElementById('tri_sol').innerText = area;
 }
 
 function trapezoidArea() {
    let base1 = Number(document.getElementById('input_trap_b1').value);
    let base2 = Number(document.getElementById('input_trap_b2').value);
    let height = Number(document.getElementById('input_trap_h').value);
    let area = 0.5 * (base1 + base2) * height;
    if (base1 < 0 || base2 < 0 || height < 0) {
      document.getElementById('trap_sol').innerText = "Cannot have a side-length or altitude of negative value";
      return;
    }
    document.getElementById('trap_sol').innerText = area;
 }
 
 function circleArea() {
    let radius = Number(document.getElementById('input_circle_r').value);
    let area = Math.PI * Math.pow(radius, 2);
    if (radius < 0) {
      document.getElementById('circle_sol').innerText = "Cannot have a radius of negative value";
      return;
    }
    document.getElementById('circle_sol').innerText = area;
 }
 
 function circleCircumference() {
    let radius = Number(document.getElementById('input_circle_r').value);
    let circumference = 2 * Math.PI * radius;
    if (radius < 0) {
      document.getElementById('circle_sol').innerText = "Cannot have a radius of negative value";
      return;
    }
    document.getElementById('circle_sol').innerText = circumference;
 }

 function exponent() {
    let base = Number(document.getElementById('input_exp_base').value);
    let exponent = Number(document.getElementById('input_exp_exponent').value);
    let result = Math.pow(base, exponent);
    document.getElementById('exp_sol').innerText = result;
 }
 
 function factorial() {
   let num = Number(document.getElementById('input_fact_num').value);
   let factorial = 1;

   if (num < 0) {
      document.getElementById('fact_sol').innerText = "This function is incapable of solving negative factorials"
   } else {
      for (let i = 1; i <= num; i++) {
         factorial *= i;
      }
      document.getElementById('fact_sol').innerText = factorial;
   }
}
 
 function logarithm() {
    let base = Number(document.getElementById('input_log_base').value);
    let num = Number(document.getElementById('input_log_num').value);
    let result = Math.log(num) / Math.log(base);
    document.getElementById('log_sol').innerText = result;
 }

 function celsiusToFahrenheit() {
    let celsius = Number(document.getElementById('input_temp_celsius').value);
    let fahrenheit = celsius * 9/5 + 32;
    document.getElementById('temp_sol').innerText = fahrenheit;
 }
 
 function fahrenheitToCelsius() {
    let fahrenheit = Number(document.getElementById('input_temp_fahrenheit').value);
    let celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('temp_sol').innerText = celsius;
 }
 
 function cmToInch() {
    let cm = Number(document.getElementById('input_length_cm').value);
    let inch = cm / 2.54;
    document.getElementById('length_sol').innerText = inch;
 }
 
 function inchToCm() {
    let inch = Number(document.getElementById('input_length_in').value);
    let cm = inch * 2.54;
    document.getElementById('length_sol').innerText = cm;
 }

 function reset() {
   currentNumber = 0;
   document.getElementById('basic_sol').textContent = '';
   document.getElementById('input_basic').value = "";
 } 

 function reset2() {
   document.getElementById('input_rec_l').value = "";
   document.getElementById('input_rec_w').value = "";
   document.getElementById('rec_sol').innerText = "";
}

function reset3() {
   document.getElementById('input_tri_l').value = "";
   document.getElementById('input_tri_a').value = "";
   document.getElementById('tri_sol').innerText = "";
}

function reset4() {
   document.getElementById('input_trap_b1').value = "";
   document.getElementById('input_trap_b2').value = "";
   document.getElementById('input_trap_h').value = "";
   document.getElementById('trap_sol').innerText = "";
}

function reset5() {
   document.getElementById('input_circle_r').value = "";
   document.getElementById('circle_sol').innerText = "";
}

function reset6() {
   document.getElementById('input_exp_base').value = "";
   document.getElementById('input_exp_exponent').value = "";
   document.getElementById('exp_sol').innerText = "";
}

function reset7() {
   document.getElementById('input_fact_num').value = "";
   document.getElementById('fact_sol').innerText = "";
}

function reset8() {
   document.getElementById('input_log_base').value = "";
   document.getElementById('input_log_num').value = "";
   document.getElementById('log_sol').innerText = "";
}

function reset9() {
   document.getElementById('input_temp_celsius').value = "";
   document.getElementById('input_temp_fahrenheit').value = "";
   document.getElementById('temp_sol').innerText = "";
}

function reset10() {
   document.getElementById('input_length_cm').value = "";
   document.getElementById('input_length_in').value = "";
   document.getElementById('length_sol').innerText = "";
}
