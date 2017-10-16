'use strict';
function fib(n) {
    if (n === 0) { //比較===
        return 0;
    } else if (n ===1){
        return 1;
    }
    return fib(n -1) + fib(n - 2);
}
const length = 40;
for (let i = 0; i <= length; i++) { //forの中にそのまま40と入れない方が良いmagic number
    console.log(fib(i));
}