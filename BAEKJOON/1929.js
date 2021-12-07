let sol = (min, max) => {
    let arr = Array(max + 1)
        .fill(true)
        .fill(false, 0, 2);

    for (let i = 2; i * i < max + 1; i++) {
        if (arr[i]) {
            for (let j = i * i; j < max + 1; j += i) {
                arr[j] = false;
            }
        }
    }

    for (i = min; i < max + 1; i++) {
        if (arr[i]) {
            console.log(i);
        }
    }
};

sol(1, 5);
