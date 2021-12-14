// 최대 별 갯수 : 2 * N -1

const sol = (n) => {
    let starLength = 1;
    let spaceLength = n-1;
    while(true) {
        if(starLength===2*n-1) {
            console.log('*'.repeat(starLength));
            break;
        }
        spaceLength-=1;
        console.log(' '.repeat(spaceLength), '*'.repeat(starLength))
        starLength+=2;
    }
}

sol(100)
