// check palindrome or not
// str1 = "amazing"
// flag = true
// for(i=0 ; i<str1.length/2 ; i++) {
//     if(str1[i] != str1[str1.length-1-i] )
//         {
//             flag = false
//         }
// }
// console.log("1.check input string is palindrome or not? using for loop and terinary operator.")
// flag ? console.log(`${str1} is a Palindrome`) : console.log(`${str1} is Not a palindrome`)

// print 2nd letter of each word in array
// arr1 = ["one","two","six","one"]
// res = ""
// for(i =0 ; i < arr1.length ; i++) {
//     res += arr1[i][1]
//     res += ', '
// }
// console.log("print 2nd letter of each word in array: ['one', 'two', 'six', 'one']")
// console.log(res)

// reverse each word in array
// arr2 =["one","two","six","one"]
// for(i in arr2){
//     temp2 = ""
//     for(j in arr2[i]){
//         temp2 = arr2[i][j] + temp2
//     }
//     arr2[i] = temp2
// }
// console.log("reverse each word in array: ['one', 'two', 'six', 'one']")
// console.log(arr2)

//prepare christmas tree pattern
console.log("Christmas Tree Pattern\n")
for(i = 0 ; i <= 25 ; i++){
    spaces = ""
    stars = ""
    for(j = 0 ; j < 26-i ; j++){
        spaces += " "
    }
    for(k = 0 ; k < +i+1 ; k++){
        stars += "* "
    }
    console.log(spaces, stars)
}
for(i = 1 ; i < 7 ; i++){
    spaces = ""
    stars = ""
    for(j = 0 ; j < 22 ; j++){
        spaces += " "
    }
    for(k = 0 ; k < 9 ; k++){
        stars += "*"
    }
    console.log(spaces, stars)
}

// prepare notes on for, for...in, for...of loops


