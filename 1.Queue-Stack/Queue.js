var queue = []; // array
var fnt = 0,
    bck = 0;
// array   [0, 0 ~~~~~~~~ 0, ~~~~]
// 프로그래머스 -> 메모리 256MB
// bck++ <-> ++bck data element [64,000,000]
// Queue 메모리 낭비해도 됨
function push(data) {
    queue[bck] = data;
    bck += 1; // queue[bck++] = data
}
function pop() {
    // shift
    fnt++; // O(1)
}
function front() {
    // 맨 앞에 데이터 가져오기
    return queue[fnt]; // return queue[fnt]
}
function empty() {
    // 비어있는지 확인.
    return fnt == bck;
}

push(3);
push(1);
push(2);
console.log(front());
pop();
console.log(front());
pop();
console.log(front());
pop();
