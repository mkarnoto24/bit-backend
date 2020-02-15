function perfect_two(nums, target) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    if (result.length > 0) {
        return result;
    } else {
        console.log("Data Not Found!")
    }
}

let nums = [2, 7, 11, 15];
let target = 9;
console.log(perfect_two(nums, target))