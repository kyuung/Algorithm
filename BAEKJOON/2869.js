const sol = (a, b, v) => {
    const answer = Math.ceil((v-b)/(a-b)) ;
    return answer
};

console.log(sol(100,99,1000000000))