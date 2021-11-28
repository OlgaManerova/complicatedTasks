let num = 266219;

let multiply = 0;

while(num > 0) {
    multiply += num % 10;
    num = Math.floor(num / 10);
    // console.log(num);
}

multiply = multiply ** 3;

console.log(String(multiply).slice(0, 2));