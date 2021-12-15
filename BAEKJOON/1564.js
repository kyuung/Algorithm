const fac = (num) => {
    let answer = 1;    
    for(let i=num; i>0; i--) {
        answer *= i
    }
    return answer
}

console.log(fac(20))