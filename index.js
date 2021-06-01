function sum() {
    const val1 = document.getElementById("val1").value;
    const val2 = document.getElementById("val2").value;
    print(Number(val1) + Number(val2));
  }
  
  function substract() {
    const val1 = document.getElementById("val1").value;
    const val2 = document.getElementById("val2").value;
    print(Number(val1) - Number(val2));
  }
  
  function divide() {
    const val1 = document.getElementById("val1").value;
    const val2 = document.getElementById("val2").value;
    print(Number(val1) / Number(val2));
  }
  
  function multiply() {
    const val1 = document.getElementById("val1").value;
    const val2 = document.getElementById("val2").value;
    print(Number(val1) * Number(val2));
  }
  
  function print(result) {
    document.getElementById("result").innerHTML = result;
  }
  
  function restore() {
    document.getElementById("val1").value = "";
    document.getElementById("val2").value = "";
    print("0");
  }
  
  // mapear funciones a elementos del dom
  
  document.getElementById("sum").onclick = sum;
  document.getElementById("substract").onclick = substract;
  document.getElementById("multiply").onclick = multiply;
  document.getElementById("divide").onclick = divide;
  document.getElementById("restore").onclick = restore;