/*
Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the 
Fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

*/
function fibs(fibLength) {
    switch (fibLength) {
        case 0: 
            return [];
            break;
        case 1: 
            return [0];
            break;
        case 2: 
            return [0,1];
            break;
    };
    const fibSequence = [0,1]
    for (let i = 2; i < fibLength; i++) {
        const newFibNumber = fibSequence[fibSequence.length-1] + fibSequence[fibSequence.length-2]
        fibSequence.push(newFibNumber);
    };
    return fibSequence;
}
//console.log(fibs(8))

function fibsRec(fibLength) {
    switch (fibLength) {
        case 0: 
            return [];
            break;
        case 1: 
            return [0];
            break;
        case 2: 
            return [0,1];
            break;
    };
    let fibArray = fibsRec(fibLength - 1);
    fibArray.push((fibArray[fibArray.length-1] + fibArray[fibArray.length-2]));
    return fibArray;
}

// console.log(fibsRec(8))






