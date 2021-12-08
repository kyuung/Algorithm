function solution(progresses, speeds) {
    let answer = [];
    let complete = [];

    for (var i = 0; i < progresses.length; i++) {
        var day = 0;
        while (progresses[i] < 100) {
            progresses[i] += speeds[i];
            day++;
        }
        complete.push(day);
    }
    console.log(complete);

    let count = false;

    while (complete.length > 0) {
        if (complete[0] > complete[1] || complete[0] === complete[1]) {
            if (!count) {
                answer.push(1);
                count = true;
                console.log(complete[0], complete[1], 'a');
            } else {
                last = answer.pop();
                answer.push(last + 1);
                console.log(complete[0], complete[1], 'b');
            }
        } else {
            answer.push(1);
            count = false;
            console.log(complete[0], complete[1], 'c');
        }
        complete.shift();
    }

    return answer;
}

// * 엣지케이스 찾아서 적용해보기
console.log(solution([90, 98, 95], [1, 1, 1]));
