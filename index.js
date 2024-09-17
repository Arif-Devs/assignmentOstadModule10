//1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

function calculateDifference  (num1, num2){
    return num1-num2
}

console.log(calculateDifference(3, 7));

//2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd (num1){
    return num1%2!==0

}

console.log(isOdd(6));


//3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.

function findMin(arr){
    if(arr.length===0){
        return null
    }
   let min = arr[0]
    for(i=0; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }
    return min;
}

console.log(findMin([10,13,84,5,65]));

//4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(arr){
   return arr.filter(num => num%2===0);
   
}
const number = [1,2,3,4,5,6]
const evenNum = filterEvenNumbers(number)
console.log(evenNum);

//5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending (num){
    num.sort((a,b)=>a-b)
    num.reverse()
    return num;
}

console.log(sortArrayDescending([4, 2, 9, -3, 6]));

//6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(letter){
    return letter.toLowerCase()
}
console.log(lowercaseFirstLetter('Hello'));

//7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.

function countVowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let count = 0
    for(i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++
    
        }
    }
    return count
}

console.log(countVowels('AEIOU aeiou'));



//8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(number){
     if(number.length===0) return 0 
    const sum = number.reduce((previousVulue, currentValue)=>{
        return previousVulue+currentValue
    },0)
    return sum/number.length
}

console.log(findAverage([10,20,30,40]));
