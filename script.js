function convert() {
    var input = document.getElementById("input").value;
    var base1 = parseInt(document.getElementById("base1").value);
    var base2 = parseInt(document.getElementById("base2").value);
    var result = parseInt(input, base1).toString(base2);
    document.getElementById("result").innerHTML = result;
  }