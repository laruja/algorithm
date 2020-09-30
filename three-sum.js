/**
 * 给定一个数组，最终返回一个二维数组，每个小数组由3个和为 0 的元素组成。全罗列。
 * 如 [1, 0, -1, 1, 2, -1, -4] // 返回 [[-1,0,1], [-1, -1, 2]]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (toString.call(nums) !== '[object Array]') {
        throw new Error('input should be array');
    }
    let result = [];
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        // 去重
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        const target = -nums[i];
        let j = i + 1, // left point
            k = nums.length - 1; // right point
        while (j < k) {
            if (nums[j] + nums[k] === target) {
                result.push([nums[i], nums[j], nums[k]]);
                j++; k--;
                // 去重
                while (nums[j] == nums[j - 1]) j++;
                while (k > j && nums[k] == nums[k + 1]) k--;
            } else if (nums[j] + nums[k] > target) {
                k--;
            } else {
                j++;
            }
        }
    }
    return result;
};

console.log(threeSum([1, 0, -1, 1, 2, -1, -4]));// [[-1,-1,2],[-1,0,1]]
console.log(threeSum([1, 0, -1, 1, 2, -1, -4, 4]));// [[-4,0,4],[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 0, 0, 0, 0]));//[[0,0,0]]