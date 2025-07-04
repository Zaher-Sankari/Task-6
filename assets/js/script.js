function divider(){
    console.log("*******************************************");
}
// 1. Reverse a String
// Problem: Write a function that takes a string as an argument and returns the string reversed.

// Example:
// Input: "javascript"
// Output: "tpircsavaj"
function reversed_str (str){
    let reversed = ""
    for (let i = str.length - 1; i >=0; i--) {
        reversed += str[i]
    }
    console.log(reversed);
}
reversed_str("javascript") 

divider()
// 2. Palindrome Check
// Problem: Write a function that checks if a given string is a palindrome (
// reads the same forwards and backward). 
// It should return true if it is a palindrome and false if it is not.
// Example:
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false
function isPalindrome(str){
    let i = 0;
    let j = str.length -1;
    while (i < j){
        if (str[i] != str[j]){
            console.log(false, `, The word ${str} is NOT Palindrome`);
            return;
        }
        i++;
        j--;
    }
    console.log(true,`,The word ${str} is Palindrome`);
}
isPalindrome('iTopiNonAvevanoNipoti'.toLowerCase()); // toLowerCase coz JS is Case-sensitive - just for testing
isPalindrome('madam');
isPalindrome('rececar');
isPalindrome('hello'); 

divider()
// 3. Find the Maximum Number in an Array
// Problem: Write a function that takes an array of numbers,
// and returns the largest number in it.
// Example:
// Input: [1, 5, 3, 9, 2]
// Output: 9
function largestNumber(arr){
    let largest;
    for(i = 0; i<= arr.length; i++){
        if (arr[i] > arr[i+1]){
            largest = arr[i]
            i++;
        }
    }
    console.log(largest);
}
largestNumber([1, 5, 3, 9, 2])
largestNumber([52,77,63,5,89,14,11])

divider()
// 4. Factorial Calculation
// Problem: Write a function that calculates the factorial of a given number.
//  (The factorial of 5 is 5 * 4 * 3 * 2 * 1)
// Example:
// Input: 5
// Output: 120
function factorial(n){
    let result = 1;
        for(let i = n; i>=1;i--){
            result = result*i
        }
    console.log(result);
}
factorial(5)
factorial(6)

divider()
// 5. Prime Number Check
// Problem: Write a function that takes an integer num and checks if it is a prime number.
//  A prime number is a natural number greater than 1,
//  that has no positive divisors other than 1 and itself.
//  The function should return true if the number is prime and false otherwise.
// Example:
// Input: 7
// Output: true
// Input: 10
// Output: false (because it's divisible by 2 and 5)
function isPrime(num){
    if (num <= 1 || num % 1 !== 0){
        return false
    }
    else{
        for(let i = 2; i<num; i++){
            if(num % i === 0){
                return false
            }
        }
    }
    return true
}
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(39));
console.log(isPrime(53.2));

divider()
// 6. Remove Duplicates from an Array
// Problem: Write a function that takes an array and returns a new array,
// containing only the unique elements (no duplicates).
// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]
function noDuplicates(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let j;
        for (j = 0; j < newArr.length; j++){
            if (arr[i] === newArr[j]){
                break;
            }
        }
        if (j === newArr.length) {
        newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
}
console.log(noDuplicates([1, 2, 2, 3, 4, 4, 5,'a','c','d','a']));

divider()
// 7. Find the Missing Number in a Sequence
// Problem: You are given an array containing 99 unique numbers whose values range from 1 to 100.
//  Write a function to find the missing number.
// Example:
// Input: An array containing all numbers from 1 to 100 except for the number 55.
// Output: 55
function missingNumber(n){
    let random = Math.floor(Math.random() * n) + 1;
    const actualSum = n * ((1 + n) /2)
    let sum = 0;
    for (let i = 1; i<=n; i++){
        if (i !== random){
            sum +=i
        }
    }
    return actualSum - sum
}
console.log(missingNumber(100));

divider()
// 8. Capitalize the First Letter of Each Word
// Problem: Write a function that takes a sentence and returns a new sentence with the first letter of each word capitalized.
// Example:
// Input: "hello world from javascript"
// Output: "Hello World From Javascript"
function capitalFirst(str){
    let splitStr = str.split(" ")
    let capitalized = ""
    let store = "";

    for(let i = 0; i < splitStr.length; i++){
        if(splitStr[i].length > 0){
            store = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1).toLowerCase()
            capitalized += store
            if(i !== splitStr.length -1){
                capitalized += " "
        }
    }
}
return capitalized;
}
console.log(capitalFirst('hEllO wORld fRom JavAScriPt'));

divider()
// 9. Anagram Check
// Problem: Write a function to check if two strings are anagrams of each other (contain the same characters with the same frequency).

// Example:
// Input: "listen", "silent"
// Output: true
// Input: "hello", "world"
// Output: false
function areAnagrams(word1, word2) {
    if (word1.length !== word2.length){
        return false
    }
    let freq1 = frequency(word1);
    let freq2 = frequency(word2);
    let keys1 = Object.keys(freq1);
    let keys2 = Object.keys(freq2);

    if (keys1.length !== keys2.length){
        return false
    }
    for (let key of keys1) {
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    }
    return true;
}
console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));  

divider()
// 10. Chunk an Array
// Problem: Write a function that takes an array and a size number, and splits the array into subarrays of the specified size.

// Example:
// Input: [1, 2, 3, 4, 5, 6, 7], 3
// Output: [[1, 2, 3], [4, 5, 6], [7]]
function chunkArray(arr, n) {
    let result = [];
    let temporalArr = [];
    let k = 0;        
    let count = 0;        

    for (let i = 0; i < arr.length; i++) {
        temporalArr[count] = arr[i]; 
        count++;
        if (count === n) {
            result[k] = temporalArr;
            k++;
            temporalArr = [];
            count = 0;
        }
    }
    if (count > 0) {
        result[k] = temporalArr;
    }
    return result;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

divider()
// 11. Find a Pair of Numbers that Sum to a Target Value
// Problem: Write a function that takes an array of numbers and a target number,
//  and returns the first pair of numbers from the array that sum up to the target.
// Example:
// Input: [10, 5, 2, 7, 8, 3], 10
// Output: [2, 8]
function pairSum(arr,n){
    let result = []
    for(let i = 0;i <= arr.length-1; i++){
        for(let j = 0;j <= arr.length-1; j++){
            if(i == j){
                continue
            }
            else if(arr[i]+arr[j] == n){
                result = [arr[i], arr[j]]
                return result
            }
            }
        }
    }
console.log(pairSum([10, 5, 2, 7, 8, 3], 10))

divider()
// 12. Rotate an Array to the Left
// Problem: Write a function that takes an array and a number n, and rotates the array elements to the left by n positions.

// Example:
// Input: [1, 2, 3, 4, 5], 2
// Output: [3, 4, 5, 1, 2]
function rotateLeft(arr, n) {
        for (let i = 0; i < n; i++) {
            let firstNumber = arr[0];
            for (let j = 0; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr[arr.length - 1] = firstNumber;
        }
        return arr;
    } 
console.log(rotateLeft([1, 2, 3, 4], 3));

divider()
// 13. Find the Intersection of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing only the elements that are common to both arrays (the intersection).

// Example:
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]
function intersection(arr1,arr2){
    let newArr = []
    let k = 0
    for(let i = 0; i<= arr1.length-1; i++){
        for(let j = 0; j<= arr2.length-1; j++){
            if(arr1[i] == arr2[j]){
                newArr[k] = arr1[i]
                k++;
            }
            else{
                continue
            }
        }
    }
    console.log(newArr)
}
intersection([1,2,3,4],[3,4,5,6]);
intersection([5,8,7,3,2],[6,7,5,3,9]);

divider()
// 14. Count Character Frequency in a String
// Problem: Write a function that takes a string and returns an object representing a frequency map, where each key is a character and its value is the number of times it appears.

// Example:
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }
function frequency(str){
    let freqCount = {}
    for(let i = 0; i <= str.length-1; i++){
        let c = str.charAt(i) // c in character
        if(c !== " "){
            if(!freqCount[c]){
                freqCount[c] = 1
        }
            else{
                freqCount[c] = freqCount[c] + 1
            }
        }
    }
    return freqCount
}
console.log(frequency("hello"));

divider()
// 15. Flatten a Nested Array
// Problem: Write a function that flattens a nested array (an array containing elements that may themselves be arrays) into a single, flat array.

// Example:
// Input: [1, [2, 3], [4, [5, 6]]]
// Output: [1, 2, 3, 4, 5, 6]
function flattenNestedArray(arr) {
    let flattenedArray = [];
    let k = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (!Array.isArray(arr[i])) {
            flattenedArray[k] = arr[i];
            k++;
        } else {
            for (let j = 0; j <= arr[i].length - 1; j++) {
                flattenedArray[k] = arr[i][j];
                k++;
            }
        }
    }
    return flattenedArray;
}
console.log(flattenNestedArray([1, [2, 3], [4, [5, 6]]]));


divider()
// 16. Find the Longest Word in a Sentence
// Problem: Write a function that takes a sentence and returns the longest word in it. If there are multiple words with the same maximum length, return the first one that appears.

// Example:
// Input: "The quick brown fox jumped over the lazy dog"
// Output: "jumped"
function largestWord(str){
    let strArr = str.split(" ")
    let largest = " "
    for (let i = 0; i < strArr.length;i++){
        if(strArr[i].length > 0){
            if(strArr[i].length > largest.length){
                largest = strArr[i]
        }
    }
}
return largest
}
console.log(largestWord("The quick brown fox jumped over the lazy dog"));

divider()
// 17. Find the Most Frequent Element in an Array
// Problem: Write a function that takes an array of numbers or strings and returns the most frequently occurring element.

// Example:
// Input: [1, 2, 3, 2, 2, 4, 5, 2]
// Output: 2
// Input: ['a', 'b', 'c', 'a', 'b', 'a']
// Output: 'a'
function mostFrequent(arr){
    let freqCount = {}
    for(let i = 0; i < arr.length; i++){
        let c = arr[i]
        if(!freqCount[c]){
            freqCount[c] = 1
        }
        else{
            freqCount[c] = freqCount[c] + 1
        }
    }
    for (let i = 0; i < arr.length; i++) {
    let c = arr[i];
    if (freqCount[c] !== 1) {
        return c; 
    }
}
return null
}
console.log(mostFrequent([1, 2, 3, 2, 2, 4, 5, 2, 3, 4, 3, 4, 3, 4]))
console.log(mostFrequent(['a', 'b', 'c', 'a', 'b', 'a']))

divider()
// 18. Sort an Array of Objects by a Property
// Problem: You have an array of objects, where each object represents a person with a name and age.
// Write a function to sort the array by age in ascending order (from youngest to oldest) without using Array.prototype.sort.
// Example:
// Input: [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }]
// Output: [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]
// Solution: (Using Bubble Sort algorithm)
function byAgeSort(arr){
    let store;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length-1; j++){
            if (arr[j].age > arr[j+1].age){
                store = arr[j];
                arr[j] = arr[j+1];  
                arr[j+1] = store;
            }
        }
    }
    return arr
}
console.log(byAgeSort([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }]));

divider()
// 19. Find the First Non-Repeating Character
// Problem: Write a function that takes a string and finds the first character that does not repeat.
// Example:
// Input: "swiss"
// Output: "w"
// Input: "aabbcc"
// Output: null (or a suitable message)
function nonRepeat(str){
    let freqCount = {}
    for(let i = 0; i < str.length; i++){
        let c = str.charAt(i) // c in character
        if(!freqCount[c]){
            freqCount[c] = 1
        }
        else{
            freqCount[c] = freqCount[c] + 1
        }
    }
    for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);
    if (freqCount[c] === 1) {
        return c; 
    }
}
return null
}
console.log(nonRepeat('swiss'))
console.log(nonRepeat('aabbcc'))

divider()
// 20. Symmetric Difference of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array,
// containing the elements that are present in one of the arrays, but not in both.

// Example:
// Input: [1, 2, 3], [3, 4, 5]
// Output: [1, 2, 4, 5]
function symmetricDiff(arr1,arr2){
let diff = [];
let k = 0;
for (let i = 0; i < arr1.length; i++) {
    let value1 = arr1[i];
    let j;
    for (j = 0; j < arr2.length; j++) {
        if (value1 == arr2[j]) {
            break; 
        }
    }
    if (j == arr2.length) {
        diff[k] = value1;
        k++;
    }
}
for (let i = 0; i < arr2.length; i++) {
    let value2 = arr2[i];
    let j;
    for (j = 0; j < arr1.length; j++) {
        if (value2 == arr1[j]) {
            break;
        }
    }
    if (j == arr1.length) {
        diff[k] = value2;
        k++;
    }
}
return diff
}
console.log(symmetricDiff([1,2,3],[3,4,5]));