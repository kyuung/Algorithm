const inputs = [1, 10, 13, 100, 1000, 100000, 100000, 0];

let sol = (n) => {
    const x = 2 * n;
    let arr = Array(x + 1)
        .fill(true)
        .fill(false, 0, 2);

    for (let i = 2; i * i < x + 1; i++) {
        if (arr[i]) {
            for (let j = i * i; j < x + 1; j += i) {
                arr[j] = false;
            }
        }
    }

    arr.fill(false, 0, n + 1);
    arr = arr.filter((num) => num);

    console.log(arr.length);
};

for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] === 0) {
        break;
    }
    sol(inputs[i]);
}
