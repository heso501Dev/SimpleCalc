let fn = document.getElementById("Fn");
let sn = document.getElementById("Sn");
let output = document.getElementById("output");

function AddNum(){
  output.style.display = "block"
  output.innerHTML = +fn.value + +sn.value;
}
function SubNum(){
  output.style.display = "block"
  output.innerHTML = fn.value - sn.value;
}
function ClearIn(){
  output.style.display = "none"
  output.innerHTML = "";
  fn.value = "";
  sn.value = "";
}
