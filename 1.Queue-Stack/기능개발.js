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

    let fnt = 0;
    let count = false;

    while (fnt < complete.length - 1) {
        if (complete[fnt] > complete[fnt + 1] || complete[fnt] === complete[fnt + 1]) {
            if (!count) {
                answer.push(1);
                count = true;
                console.log(complete[fnt], complete[fnt + 1], 'a');
            } else {
                last = answer.pop();
                answer.push(last + 1);
                console.log(complete[fnt], complete[fnt + 1], 'b');
            }
            fnt += 1;
        } else {
            answer.push(1);
            count = false;
            console.log(complete[fnt], complete[fnt + 1], 'c');
            fnt += 1;
        }
    }

    return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
