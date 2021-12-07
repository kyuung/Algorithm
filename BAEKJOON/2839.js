const input = 4999;

const sol = (N) => {
    count = 0;

    while (true) {
        if (N % 5 === 0) {
            count = count + Math.floor(N / 5);
            console.log(count);
            break;
        }
        N = N - 3;
        count = count + 1;
        if (N < 0) {
            console.log(-1);
            break;
        }
    }
};

sol(input);
