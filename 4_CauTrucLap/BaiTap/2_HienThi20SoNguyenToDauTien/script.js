let limitPrime = window.prompt('Bạn muốn nhập bao nhiêu số?: ');
let countInputPrime = 0;

document.write('Các số nguyên tố trong dãy bạn vừa nhập: ');
while(countInputPrime < limitPrime) {
    let num = parseInt(window.prompt('Nhập số thứ ' + (countInputPrime + 1) + ': ' ));
    if(isPrime(num)) {
        document.write(num + ' ');
    }
    countInputPrime++;
}

function isPrime(num) {
    if(num <= 1) {
        return false;
    }
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

