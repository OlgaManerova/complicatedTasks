'use strict'

let str = 'Создайте функцию, которая принимает 1 аргумент (название произвольное)';

function strTransformation (arg) {
    if (typeof arg !== 'string') {
        alert('Введите строку'); 
    } else {
        arg = arg.trim();

        if (arg.length > 30) {
            arg = arg.slice(0, 31) + '...';
        }

        return arg;
    }
}

console.log(strTransformation(str));