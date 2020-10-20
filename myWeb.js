//For Size selection
var buttonS = document.getElementById('S-size');
var buttonM = document.getElementById('M-size');
var buttonL = document.getElementById('L-size');
var buttonOK = document.getElementById('comfirm');
//for variable number
var mySize = document.querySelector('table tr td i1');
//mySize.textContent = '0';
var myAmount = document.querySelector('h1 a1');
//myAmount.textContent = '0';
//for calculation
var amount = 0;

buttonS.onclick = function() {
    mySize.innerHTML = 'S';
}
buttonM.onclick = function() {
    mySize.innerHTML = 'M';

}

buttonL.onclick = function() {
    mySize.innerHTML = 'L';
}
buttonOK.onclick = function() {
    if (mySize.innerHTML == 'S' ||
        mySize.innerHTML == 'M' ||
        mySize.innerHTML == 'L') {
        amount++;
        myAmount.innerHTML = amount.toString();
    } else {
        alert('Please choose your size.')
    }

}