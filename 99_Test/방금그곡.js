function solution(m, musicinfos) {
    let answer = '';
    const scoreReplace = word => {
        word = word.replace(/C#/g, 'c');
        word = word.replace(/D#/g, 'd');
        word = word.replace(/F#/g, 'f');
        word = word.replace(/G#/g, 'g');
        word = word.replace(/A#/g, 'a');

        return word;
    };
    m = scoreReplace(m);

    const m_time = m.length;
    musicinfos = musicinfos.map(info => info.split(',')); // 접근하기 쉽게 배열로 변환
    musicinfos = musicinfos.filter(
        info => (info[1].slice(0, 2) * 60 + Number(info[1].slice(3, 5))) - ((info[0].slice(0, 2) * 60 + Number(info[0].slice(3, 5)))) >= m_time
    );

    // # 붙은 애들 변환
    musicinfos.map(info => (info[3] = scoreReplace(info[3])));

    musicinfos.map(info => {
        const time = (info[1].slice(0, 2) * 60 + Number(info[1].slice(3, 5))) - ((info[0].slice(0, 2) * 60 + Number(info[0].slice(3, 5))));
        if (time > info[3].length) {
            while (time > info[3].length) {
                info[3] += info[3];
            }
        }
        info[3] = info[3].slice(0, time);
        info = info.push(time);
    });

    const result = musicinfos.filter(info => info[3].includes(m));
    if (result.length === 0) {
        answer = '(None)';
    } else if (result.length === 1) {
        answer = result[0][2];
    } else if (result.length > 1) {
        result.sort((a, b) => {
            if (a[4] > b[4]) {
                return -1;
            } else if (a[4] < b[4]) {
                return 1;
            } else {
                return 0;
            }
        });
        answer = result[0][2];
    }
    return answer;
}

solution('A#', ['12:05,13:00,HELLO,A#']);
