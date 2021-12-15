// 재귀 
const fac2 = (num) => {
    return num ? num*sol(num-1) : 1
}


const fac = (num) => {
    let answer = 1;    
    for(let i=num; i>0; i--) {
        answer *= i
    }
    return answer
}

console.log(fac(20))