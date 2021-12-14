function solution(clothes) {
    let kindOfClothes = [];
    let newClothes = []
    let lengthOfKind = [];

    // 종류별로 분류할 수 있는 배열 만듬 => newClothes
    clothes.map((clothe)=>kindOfClothes.push(clothe[1]))
    kindOfClothes = Array.from(new Set(kindOfClothes))
    kindOfClothes.map((kind)=>newClothes.push([kind]))
    clothes.map((clothe)=>{
        newClothes[newClothes.findIndex(kind => clothe[1]===kind[0])].push(clothe[0])
    })

    // 종류 별 length를 담고 있는 배열
    newClothes.map((clothe)=>lengthOfKind.push(clothe.length-1))
    
    // 접근하려고 했던 방식은, 1종류만 입었을 때, 2종류만 입었을 때, 3종류만.. 하는 방법으로 늘려가며 세는 방법
    console.log(newClothes, lengthOfKind)


}

solution([["zellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"],["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]])