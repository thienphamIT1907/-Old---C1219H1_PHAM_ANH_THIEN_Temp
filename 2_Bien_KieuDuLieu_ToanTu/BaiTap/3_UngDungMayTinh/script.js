let firstNum = Number(document.getElementById('firstNum').value);
let secondNum = Number(document.getElementById('secondNum').value);


function additionBtn(){
    let firstNum = Number(document.getElementById('firstNum').value);
    let secondNum = Number(document.getElementById('secondNum').value);
    let result = firstNum + secondNum;
    document.getElementById('result').innerHTML = 'result: ' + result ;
}
function subtractionBtn() {
    let firstNum = Number(document.getElementById('firstNum').value);
    let secondNum = Number(document.getElementById('secondNum').value);
    let result = firstNum - secondNum;
    document.getElementById('result').innerHTML = 'result: ' + result ;
}
function multiplicationBtn() {
    let firstNum = Number(document.getElementById('firstNum').value);
    let secondNum = Number(document.getElementById('secondNum').value);
    let result = firstNum * secondNum;
    document.getElementById('result').innerHTML = 'result: ' + result ;
}
function divisionBtn() {
    let firstNum = Number(document.getElementById('firstNum').value);
    let secondNum = Number(document.getElementById('secondNum').value);
    let result = firstNum / secondNum;
    if(result == 'Infinity' || result == '-Infinity') {
        document.getElementById('result').innerHTML = 'result: ' + 'Error, cannot /0' ;
    } else document.getElementById('result').innerHTML = 'result: ' + result ;

}