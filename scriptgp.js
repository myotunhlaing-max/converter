// Distance Conversions
function mileToKm() {
  let m = document.getElementById("mile").value;
  document.getElementById("mileResult").innerText = m * 1.609 + " km";
}
function kmToMile() {
  let k = document.getElementById("km").value;
  document.getElementById("kmResult").innerText = k / 1.609 + " miles";
}
function feetToInch() {
  let f = document.getElementById("feet").value;
  document.getElementById("feetResult").innerText = f * 12 + " inches";
}
function inchToFeet() {
  let i = document.getElementById("inch").value;
  document.getElementById("inchResult").innerText = i / 12 + " feet";
}

// Temperature
function cToF() {
  let c = document.getElementById("celsius").value;
  document.getElementById("cResult").innerText = (c * 9/5 + 32) + " °F";
}
function fToC() {
  let f = document.getElementById("fahrenheit").value;
  document.getElementById("fResult").innerText = ((f - 32) * 5/9) + " °C";
}

// Area Calculations
function circleArea() {
  let r = document.getElementById("radius").value;
  document.getElementById("circleResult").innerText = 3.14 * r * r + " sq units";
}
function triangleArea() {
  let b = document.getElementById("base").value;
  let h = document.getElementById("height").value;
  document.getElementById("triangleResult").innerText = (b * h) / 2 + " sq units";
}
function squareArea() {
  let s = document.getElementById("side").value;
  document.getElementById("squareResult").innerText = s * s + " sq units";
}
function rectangleArea() {
  let l = document.getElementById("length").value;
  let w = document.getElementById("width").value;
  document.getElementById("rectResult").innerText = l * w + " sq units";
}
