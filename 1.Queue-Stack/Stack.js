var stack = [];
var bck = 0;

function push(data) {
    stack[bck] = data;
    bck += 1;
}
function pop() {
    bck--;
}
function back() {
    return stack[bck - 1];
}

push(3);
push(1);
push(2);
console.log(back());
pop();
console.log(back());
pop();
console.log(back());
pop();

console.log(stack);
