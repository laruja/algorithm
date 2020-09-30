/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    let arrays = [], result = [];
    for (let i = 0; i < digits.length; i++) {
        if (parseInt(digits[i]) >= 2 && parseInt(digits[i]) <= 9) {
            arrays.push(map[digits[i]]);
        } else {
            return [];
        }
    }

    while (arrays.length > 1) {
        const arr1 = arrays.pop();
        const arr2 = arrays.pop();
        arr2.forEach(v1 => {
            arr1.forEach(v2 => {
                result.push(v1 + v2);
            });
        });
    }
    return result;
};