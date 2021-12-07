var q = [];

var counts = new Array(10).fill(0);
function solution(priorities, location) {
    var answer = 0;
    priorities.map((elem, idx) => {
        q.push([elem, idx]);
        counts[elem]++;
    });
    // 1. 너무 생각하지 말고
    // 2. 시간복잡도 고려하고 (1억번만 안넘으면 1초 안넘음)
    // 3. 하고 시간 남으면 머리써봐라..

    for (var p = 9; p >= 0; p--) {
        while (counts[p] > 0) {
            let val = q[0];
            q.shift();
            if (val[0] == p) {
                answer++;
                counts[p]--;
                if (val[1] == location) return answer;
            } else {
                q.push(val);
            }
        }
    }
    return answer;
}
