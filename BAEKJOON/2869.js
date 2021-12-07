const x = 100;
const y = 99;
let v = 1000000000;
let answer = 0;

while (true) {
    answer++;
    v -= x;
    if (v < 1) {
        break;
    }
    v += y;
}

console.log(answer);
