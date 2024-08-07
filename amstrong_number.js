const number_string = prompt("Enter a number to find whether the number is amstrong or not");
const convertedArr = number_string.split("");

let temp = 0;
for(let i = 0; i < convertedArr.length; i++) {
    temp += (convertedArr[i] ** convertedArr.length)
}
if(temp == number_string) {
    console.log("Number is Amstrong");
} else {
    console.log("Number is not Amstrong");
}


//input 153
//output Number is Amstrong

//input 9
//output Number is not Amstrong

//input 723
//output Number is not Amstrong

//input 1634
//output Number is Amstrong
