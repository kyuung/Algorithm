function solution(progresses, speeds) {
    var answer = [];
    var bck = 0;
    var num = 1;

    var q = [];
    var fnt = 0;

    for (var i = 0; i < progresses.length; i++) {
        var day = 0;
        while (progresses[i] < 100) {
            progresses[i] += speeds[i];
            day++;
        }
        q.push(day);
    }
    console.log(q);

    while (fnt < q.length - 1) {
        if (q[fnt] > q[fnt + 1] || q[fnt] === q[fnt + 1]) {
            num += 1;
            fnt++;
            if (num > 1 && fnt === q.length - 1) {
                console.log('??');
                bck === 0 ? (bck = 0) : (bck -= 1);
                answer[bck] = num;
            }
        } else {
            if (num > 1) {
                answer[bck] = num;
                bck += 1;
                num = 1;
            }
            answer[bck] = 1;
            bck += 1;
            fnt += 1;
        }
    }
    return answer;
}

// 선생님.... 제가... .. 잘못 풀고 있는 것 같아요..... 같은 것 처리를 대체 어ㄸ거더걷걷걷걷ㄲ 망했어 ....망..

console.log(solution([5, 5, 5], [21, 25, 20]));
