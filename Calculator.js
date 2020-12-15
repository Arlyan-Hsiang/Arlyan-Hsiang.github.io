//For Calculator selection
const buttonC = document.getElementById('buttonC');
const buttonchange = document.getElementById('buttonchange');
const buttonpercentage = document.getElementById('buttonpercentage');
const buttondelete = document.getElementById('buttondelete');
const buttondivid = document.getElementById('buttondivid');
const buttonmult = document.getElementById('buttonmult');
const buttonless = document.getElementById('buttonless');
const buttondot = document.getElementById('buttondot');
const buttonequal = document.getElementById('buttonequal');
const buttonplus = document.getElementById('buttonplus');
//number button
const button0 = document.getElementById('button0');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');
let txtresult = document.querySelector('div textarea');

//for calculation
let totalAmount = "";
const arr = ['+', '-', '*', '/'];


//NUMBER choose
button0.onclick = function() {
    totalAmount = txtresult.innerHTML;
    totalAmount = totalAmount + "0";
    changeResult();
}
button1.onclick = function() {
    totalAmount = txtresult.innerHTML;
    totalAmount = totalAmount + "1";
    changeResult();
}
button2.onclick = function() {
    totalAmount = txtresult.innerHTML;
    totalAmount = totalAmount + "2";
    changeResult();
}
button3.onclick = function() {
    totalAmount = txtresult.innerHTML;
    totalAmount = totalAmount + "3";
    changeResult();
}
button4.onclick = function() {
    totalAmount = txtresult.innerHTML;
    totalAmount = totalAmount + "4";
    changeResult();
}
button5.onclick = function() {
    totalAmount = txtresult.innerHTML;
    totalAmount = totalAmount + "5";
    changeResult();
}
button6.onclick = function() {
    totalAmount = txtresult.innerHTML;
    totalAmount = totalAmount + "6";
    changeResult();
}
button7.onclick = function() {
    totalAmount = txtresult.innerHTML;
    totalAmount = totalAmount + "7";
    changeResult();
}
button8.onclick = function() {
    totalAmount = txtresult.innerHTML;
    totalAmount = totalAmount + "8";
    changeResult();
}
button9.onclick = function() {
        totalAmount = txtresult.innerHTML;
        totalAmount = totalAmount + "9";
        changeResult();
    }
    //empty the calculation
buttonC.onclick = function() {
        totalAmount = txtresult.innerHTML;
        totalAmount = "";
        changeResult();
    }
    //change to positive/negative number
buttonchange.onclick = function() {
        totalAmount = txtresult.innerHTML;
        switch (Math.sign(totalAmount)) {
            case -1:
                totalAmount = (parseFloat(totalAmount) * -1).toString();
                changeResult();
                break;
            case 1:
                totalAmount = parseFloat(totalAmount) * -1
                changeResult();
                break;
            default:
                break;
        }
    }
    //delete
buttondelete.onclick = function() {
    totalAmount = txtresult.innerHTML;
    let str = totalAmount.slice(0, totalAmount.length - 1);
    totalAmount = str;
    changeResult();
}

//calculate element
buttonplus.onclick = function() {
        totalAmount = txtresult.innerHTML;
        let str = totalAmount.charAt(totalAmount.length - 1)
        if (arr.indexOf(str) == -1) {
            totalAmount = totalAmount + "+";
        } else {
            let str2 = totalAmount.slice(0, totalAmount.length - 1);
            totalAmount = str2 + "+";
        }
        changeResult();
    }
    //less
buttonless.onclick = function() {
        totalAmount = txtresult.innerHTML;
        let str = totalAmount.charAt(totalAmount.length - 1)
        if (arr.indexOf(str) == -1) {
            totalAmount = totalAmount + "-";
        } else {
            let str2 = totalAmount.slice(0, totalAmount.length - 1);
            totalAmount = str2 + "-";
        }
        changeResult();
    }
    //multiple
buttonmult.onclick = function() {
        totalAmount = txtresult.innerHTML;
        let str = totalAmount.charAt(totalAmount.length - 1)
        if (arr.indexOf(str) == -1) {
            totalAmount = totalAmount + "*";
        } else {
            let str2 = totalAmount.slice(0, totalAmount.length - 1);
            totalAmount = str2 + "*";
        }
        changeResult();
    }
    //multiple
buttondivid.onclick = function() {
        totalAmount = txtresult.innerHTML;
        let str = totalAmount.charAt(totalAmount.length - 1)
        if (arr.indexOf(str) == -1) {
            totalAmount = totalAmount + "/";
        } else {
            let str2 = totalAmount.slice(0, totalAmount.length - 1);
            totalAmount = str2 + "/";
        }
        changeResult();
    }
    //for .
buttondot.onclick = function() {
    totalAmount = txtresult.innerHTML;
    totalAmount = totalAmount + ".";
    changeResult();
}
buttonpercentage.onclick = function() {
        totalAmount = txtresult.innerHTML;
        totalAmount = eval(totalAmount);
        totalAmount = totalAmount / 100;
        changeResult();
    }
    //equal
buttonequal.onclick = function() {
    totalAmount = txtresult.innerHTML;
    totalAmount = eval(totalAmount);
    changeResult();
}

function changeResult() {
    txtresult.innerHTML = totalAmount;
}