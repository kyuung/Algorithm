// 2부터 구하고자 하는 구간의 모든 수를 나열한다.
// 자기 자신을 제외한 2의 배수를 모두 지운다.
// 자기 자신을 제외한 3의 배수룰 모두 지운다.
// 자기 자신을 4의 배수를 모두 지운다.
// ...

// let fs = require('fs');
// let inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

// let cases = Number(inputs[0]);
// let splited = inputs[1].split(' ').map((item) => Number(item));

const sol = (n, arrLen, arr) => {
    let answer = 0;
    let numberSet = new Array(n+1).fill(true, 0,n+1).fill(false, 0, 2);
    for(let i=2; i<n; i++) {
        for(let j=2; i*j<n+1; j++) {
            numberSet.fill(false, i*j, i*j+1)
        }
    }

    for(i=0; i<arrLen; i++) {
        ! numberSet[arr[i]] ? answer : answer += 1
    }
    console.log(answer) 
}

sol(1000, 5, [ '1', '2', '3', '98', '11' ])
