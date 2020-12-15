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

var totalAmount = "";
var arr = ['+', '-', '*', '/']; //NUMBER choose

button0.onclick = function () {
  totalAmount = txtresult.innerHTML;
  totalAmount = totalAmount + "0";
  changeResult();
};

button1.onclick = function () {
  totalAmount = txtresult.innerHTML;
  totalAmount = totalAmount + "1";
  changeResult();
};

button2.onclick = function () {
  totalAmount = txtresult.innerHTML;
  totalAmount = totalAmount + "2";
  changeResult();
};

button3.onclick = function () {
  totalAmount = txtresult.innerHTML;
  totalAmount = totalAmount + "3";
  changeResult();
};

button4.onclick = function () {
  totalAmount = txtresult.innerHTML;
  totalAmount = totalAmount + "4";
  changeResult();
};

button5.onclick = function () {
  totalAmount = txtresult.innerHTML;
  totalAmount = totalAmount + "5";
  changeResult();
};

button6.onclick = function () {
  totalAmount = txtresult.innerHTML;
  totalAmount = totalAmount + "6";
  changeResult();
};

button7.onclick = function () {
  totalAmount = txtresult.innerHTML;
  totalAmount = totalAmount + "7";
  changeResult();
};

button8.onclick = function () {
  totalAmount = txtresult.innerHTML;
  totalAmount = totalAmount + "8";
  changeResult();
};

button9.onclick = function () {
  totalAmount = txtresult.innerHTML;
  totalAmount = totalAmount + "9";
  changeResult();
}; //empty the calculation


buttonC.onclick = function () {
  totalAmount = txtresult.innerHTML;
  totalAmount = "";
  changeResult();
}; //change to positive/negative number


buttonchange.onclick = function () {
  totalAmount = txtresult.innerHTML;

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
  totalAmount = txtresult.innerHTML;
  var str = totalAmount.slice(0, totalAmount.length - 1);
  totalAmount = str;
  changeResult();
}; //calculate element


buttonplus.onclick = function () {
  totalAmount = txtresult.innerHTML;
  var str = totalAmount.charAt(totalAmount.length - 1);

  if (arr.indexOf(str) == -1) {
    totalAmount = totalAmount + "+";
  } else {
    var str2 = totalAmount.slice(0, totalAmount.length - 1);
    totalAmount = str2 + "+";
  }

  changeResult();
}; //less


buttonless.onclick = function () {
  totalAmount = txtresult.innerHTML;
  var str = totalAmount.charAt(totalAmount.length - 1);

  if (arr.indexOf(str) == -1) {
    totalAmount = totalAmount + "-";
  } else {
    var str2 = totalAmount.slice(0, totalAmount.length - 1);
    totalAmount = str2 + "-";
  }

  changeResult();
}; //multiple


buttonmult.onclick = function () {
  totalAmount = txtresult.innerHTML;
  var str = totalAmount.charAt(totalAmount.length - 1);

  if (arr.indexOf(str) == -1) {
    totalAmount = totalAmount + "*";
  } else {
    var str2 = totalAmount.slice(0, totalAmount.length - 1);
    totalAmount = str2 + "*";
  }

  changeResult();
}; //multiple


buttondivid.onclick = function () {
  totalAmount = txtresult.innerHTML;
  var str = totalAmount.charAt(totalAmount.length - 1);

  if (arr.indexOf(str) == -1) {
    totalAmount = totalAmount + "/";
  } else {
    var str2 = totalAmount.slice(0, totalAmount.length - 1);
    totalAmount = str2 + "/";
  }

  changeResult();
}; //for .


buttondot.onclick = function () {
  totalAmount = txtresult.innerHTML;
  totalAmount = totalAmount + ".";
  changeResult();
};

buttonpercentage.onclick = function () {
  totalAmount = txtresult.innerHTML;
  totalAmount = eval(totalAmount);
  totalAmount = totalAmount / 100;
  changeResult();
}; //equal


buttonequal.onclick = function () {
  totalAmount = txtresult.innerHTML;
  totalAmount = eval(totalAmount);
  changeResult();
};

function changeResult() {
  txtresult.innerHTML = totalAmount;
}