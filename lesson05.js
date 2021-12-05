let arr = ['12', '5468', '20', '48', '789', '1', '785'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == 2 || arr[i][0] == 4) {
        console.log(arr[i]);
    }
}


for (let k=1; k <= 100; k++) {
    let del = 0;

    for (let j=1; j<=k; j++) {
        if (k % j == 0) {
            del++;
        }
    }

    if (del == 2) {
        console.log(k);
    }
}