// CSPRNを返す関数
export function getRand(a: number = -20000, b: number = 20001): number {
    exceptionCheck(a, b);
    if(typeof window.crypto !== 'undefined') {
        const array = new Uint32Array(1);
        const rand = window.crypto.getRandomValues(array)[0];
        return rand % (b-a)+a;
    } else {
        throw new Error('getRand関数はブラウザしか実行できません.')
    }
}

function exceptionCheck(a: number, b: number): void {
    if(a >= b) {
        throw new Error("第1引数は第2引数より小さい数である必要があります.")
    }
    if(!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new TypeError("引数は整数値である必要があります.")
    }
}

export function getRandFloat(a: number = -20000.0, b: number = 20000.0): number {
    exceptionCheckFloat(a, b);
    if(typeof window.crypto !== 'undefined') {
        const array = new Uint32Array(1);
        const rand = window.crypto.getRandomValues(array)[0];
        const mx = (2**32)-1;
        return (rand/mx)*(b-a)+a;
    } else {
        throw new Error('getRand関数はブラウザしか実行できません.')
    }
}

function exceptionCheckFloat(a: number, b: number): void {
    if(a >= b) {
        throw new Error("第1引数は第2引数より小さい数である必要があります.")
    }
    if(!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new TypeError("引数は有限数である必要があります.")
    }
}
