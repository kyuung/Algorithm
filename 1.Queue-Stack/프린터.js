function solution(priorities, location) {
    let answer = 0;

    // location 기억
    let arr = Array(priorities.length)
        .fill(0)
        .fill('j', location, location + 1);

    // 찾기 100*100*100 => 제한조건내
    while (true) {
        const ele = priorities.shift();
        const page = arr.shift();
        if (priorities.every((order) => ele > order || ele === order)) {
            if (page === 'j') {
                answer++;
                break;
            } else {
                answer++;
            }
        } else {
            priorities.push(ele);
            arr.push(page);
        }
        console.log(priorities, arr);
    }
    return answer;
}

console.log(solution([9, 1, 1, 1], 0));
