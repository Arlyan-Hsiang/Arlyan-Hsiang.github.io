"use strict";

//For Calculator selection
var buttonC = document.getElementById('buttonC');
var buttonchange = document.getElementById('buttonchange');
var buttonpercentage = document.getElementById('buttonpercentage');
var buttondelete = document.getElementById('buttondelete');
var buttondivid = document.getElementById('buttondivid');
var buttonmult = document.getElementById('buttonmult');
var buttonless = document.getElementById('buttonless');
var buttondot = document.getElementById('buttondot');
var buttonequal = document.getElementById('buttonequal');
var buttonplus = document.getElementById('buttonplus'); //number button

var button0 = document.getElementById('button0');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var button5 = document.getElementById('button5');
var button6 = document.getElementById('button6');
var button7 = document.getElementById('button7');
var button8 = document.getElementById('button8');
var button9 = document.getElementById('button9');
var txtresult = document.querySelector('div textarea'); //for calculation

var totalAmount = ""; //NUMBER choose

button0.onclick = function () {
  totalAmount = totalAmount + "0";
  changeResult();
};

button1.onclick = function () {
  totalAmount = totalAmount + "1";
  changeResult();
};

button2.onclick = function () {
  totalAmount = totalAmount + "2";
  changeResult();
};

button3.onclick = function () {
  totalAmount = totalAmount + "3";
  changeResult();
};

button4.onclick = function () {
  totalAmount = totalAmount + "4";
  changeResult();
};

button5.onclick = function () {
  totalAmount = totalAmount + "5";
  changeResult();
};

button6.onclick = function () {
  totalAmount = totalAmount + "6";
  changeResult();
};

button7.onclick = function () {
  totalAmount = totalAmount + "7";
  changeResult();
};

button8.onclick = function () {
  totalAmount = totalAmount + "8";
  changeResult();
};

button9.onclick = function () {
  totalAmount = totalAmount + "9";
  changeResult();
}; //empty the calculation


buttonC.onclick = function () {
  totalAmount = "";
  changeResult();
}; //change to positive/negative number


buttonchange.onclick = function () {
  switch (Math.sign(totalAmount)) {
    case -1:
      totalAmount = (parseFloat(totalAmount) * -1).toString();
      changeResult();
      break;

    case 1:
      totalAmount = parseFloat(totalAmount) * -1;
      changeResult();
      break;

    default:
      break;
  }
}; //delete


buttondelete.onclick = function () {
  var str = totalAmount.slice(0, totalAmount.length - 1);
  totalAmount = str;
  changeResult();
}; //calculate element


buttonplus.onclick = function () {
  var str = totalAmount.slice(totalAmount.length, 1);
  if (str) totalAmount = totalAmount + "+";
  changeResult();
}; //less


buttonless.onclick = function () {
  totalAmount = totalAmount + "-";
  changeResult();
}; //multiple


buttonmult.onclick = function () {
  totalAmount = totalAmount + "*";
  changeResult();
}; //multiple


buttondivid.onclick = function () {
  totalAmount = totalAmount + "/";
  changeResult();
}; //for .


buttondot.onclick = function () {
  totalAmount = totalAmount + ".";
  changeResult();
};

buttonpercentage.onclick = function () {
  totalAmount = math.evaluate(totalAmount);
  totalAmount = totalAmount / 100;
  changeResult();
}; //equal


buttonequal.onclick = function () {
  totalAmount = math.evaluate(totalAmount);
  changeResult();
};

function changeResult() {
  txtresult.innerHTML = totalAmount;
}