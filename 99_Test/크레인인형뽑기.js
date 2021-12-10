function solution(board, moves) {
    let answer = 0;
    let newBoard = []; // 세로줄로 재배열
    moves = moves.map((move)=>move-1) // 배열의 인덱스는 0번부터 시작하므로 처음부터 1 빼고 시작
    let basket = [];

    // 최대로 돌아봤자 30*30
    for(let i=0; i<board.length; i++) {
        const arr = []
        for(let j=0; j<board[0].length; j++) {
            arr.unshift(board[j][i])
        }
        newBoard.push(arr)
    }
    

    // moves element => newBoard index 위치 맞춰서 빼고 basket에 넣기
    moves.map((move)=>{
        while(true) {
            const lastEl = newBoard[move].pop()
            if(lastEl > 0) {
                // * 0보다 크면 인형을 뽑았을 때 -> 바스킷에 집어넣는다. 
                basket.push(lastEl)
                break;
            } else if(lastEl === undefined) {
                // * undefined는 빈 배열일 때
                break;
            }
            // * 0일때는 그냥 돌게 한다.
        }
    })
    
    // * 반복되는 애들 찾아서 splice로 지우기
    while(true) {
        let repeat =false;
        for(let i=0; i<basket.length; i++) {
            if(basket[i] === basket[i+1]) {
                basket.splice(i,2)
                repeat = true;
                answer += 2;
            }
        }
        if(!repeat) {
            break;
        }
    }

    return answer;
}

