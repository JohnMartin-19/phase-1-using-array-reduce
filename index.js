const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let sum = batteryBatches.reduce(function(a,b){
    return a+b;
})

console.log(sum)