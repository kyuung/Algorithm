const x = 45;
const y = 50;
let answer = 2;

// fixed value
let first_move = 1;
x === 0 ? (first_move = 1) : (first_move = 2);
const last_move = 1;
let remain_distance = y - x - first_move - last_move;

let move = first_move + 1;

while (remain_distance > 0) {
    move += 1;
    remain_distance -= move;
    answer++;
}

console.log(answer);
