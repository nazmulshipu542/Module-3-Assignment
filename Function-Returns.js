function findMaxNumber(...nums){
    var maxNum = Math.max(...nums);
    console.log(nums);
    console.log("Maximum Number: " ,maxNum); 
}
findMaxNumber(10, 20, 5, 30, 25, 100)