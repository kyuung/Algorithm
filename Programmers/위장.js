function solution(clothes) {
    let newClothes = {}
    let answer = 1;
    
    for(let i=0; i<clothes.length; i++) {
        if(!(clothes[i][1] in newClothes)) {
            newClothes[clothes[i][1]] = 1;
        }
        newClothes[clothes[i][1]] += 1;
    }

    for (let key in newClothes) {
        answer *= newClothes[key]
    }
    return answer-1
}



console.log(solution([["zellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"],["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]))