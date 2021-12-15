function solution(s) {
    s = s.split(' ');
    s = s.map((el)=> Number(el))
    s.sort((a,b) => {return a-b})
    const answer = `${s[0]} ${s[s.length-1]}`
    return answer;
}
console.log(solution("3 2 -9 4"))