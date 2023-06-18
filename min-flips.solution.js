/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
    let flips = 0;

    for (let i = 0; i < 32; i++) {
        const bitA = (a >> i) & 1;
        const bitB = (b >> i) & 1;
        const bitC = (c >> i) & 1;

        if (bitC === 1) {
            if (bitA === 0 && bitB === 0) {
                flips += 1;
            }
        } else {
            if (bitA === 1 && bitB === 1) {
                flips += 2;
            } else if (bitA === 1 || bitB === 1) {
                flips += 1;
            }
        }
    }

    return flips;
};