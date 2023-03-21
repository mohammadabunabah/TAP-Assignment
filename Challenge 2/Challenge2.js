function getTheMissingNumber (nums) {
    let sum = 0;
    const n = nums.length;
    if(n === 0){
        return 0;
    }
    const maxSum = (n * (n + 1)) / 2;
    nums.forEach(number => {
        sum += number;
    });
    return maxSum - sum;
}