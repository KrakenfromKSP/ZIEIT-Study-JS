// Task 1

function unique(arr) {
    let result = [];
    arr.forEach(element => {
        let unic = true;
        for (let elem of result) {
            if (element === elem){
                unic = false;
                break;
            }
        }
        if (unic === true){
            result.push(element);
        }
    });
    return result;
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

alert(unique(values));// Hare, Krishna, :-O

// Task 2

function aclean(arr) {
    let cleanWords = {};
    for (let word of arr) {
        let sortedWord = word.toLowerCase().split('').sort().join('');
        cleanWords[sortedWord] = word;
    }
    return Object.values(cleanWords);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr))

//Task 3 

function countOccurrences(arr) {
    let occurrencesMap = new Map();
    for (let num of arr) {
        if (occurrencesMap.has(num)) {
            occurrencesMap.set(num, occurrencesMap.get(num) + 1);
        } else {
            occurrencesMap.set(num, 1);
        }
    }
    return occurrencesMap;
}

const numbers = [1, 2, 3, 4, 2, 1, 3, 5, 6, 5];
const result = countOccurrences(numbers);
console.log(result);
// Result: Map {1 => 2, 2 => 2, 3 => 2, 4 => 1, 5 => 2, 6 => 1}

//Task 4

function areAllUnique(arr) {
    let uniqueSet = new Set(arr);
    return uniqueSet.size === arr.length;
}

const uniqueArray = [1, 2, 3, 4, 5];
const hasDuplicates = areAllUnique(uniqueArray);
console.log(hasDuplicates); //Result: true

const arrayWithDuplicetes = [1, 2, 3, 2, 4, 5];
const hasDuplicates2 = areAllUnique(arrayWithDuplicetes);
console.log(hasDuplicates2); //Result: false