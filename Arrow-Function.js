var calculateSquare = () => {
    var prompt =require("prompt-sync")();
    var num = prompt("Enter a number: ");
    sqauredNum = (num*num);
    console.log("Output: ", sqauredNum);
}
return calculateSquare()