const ftoc = function(fahrenheitTemp) {
  let celciusTemp = (fahrenheitTemp - 32) * (5/9);
  return +celciusTemp.toFixed(1);
};

const ctof = function(celciusTemp) {
  let fahrenheitTemp = (celciusTemp * (9/5)) + 32;
  return +fahrenheitTemp.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
