function profit(arr) {
    // let arr = [5,6,15,3,10,22,15];
    let min = arr[0];
    let maxProfit = 0;
    let profit = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];

        }
        profit = arr[i] - min;

        if (profit > maxProfit) {
            maxProfit = profit;

        }
    }
    console.log("max profit is :" + maxProfit);

}

let arr = [10, 15, 8, 7, 14];

profit(arr);