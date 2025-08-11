function mergeSort(array) {
    // console.log('the recived array',array)
    if (array.length <= 1) {
        //console.log('down to single item',array)
        return array;
    } 
    const middleOfArrayIndex = Math.floor(array.length / 2);
    const slicedArrayOne = array.slice(0,middleOfArrayIndex);
    const slicedArrayTwo = array.slice(middleOfArrayIndex);
    
    const arrayOne = mergeSort(slicedArrayOne);
    //console.log("the first array",arrayOne);
    const arrayTwo = mergeSort(slicedArrayTwo);
    //console.log("the second array",arrayTwo);
    return mergeSorted(arrayOne, arrayTwo);


    function mergeSorted(arrayOne, arrayTwo ) {
        //console.log('arrayOne being sorted',arrayOne);
        //console.log('arrayTwo being sorted',arrayTwo);
        let arrayOneIndex = 0;
        let arrayTwoIndex = 0;
        let sortedArray = [];

        while (arrayOneIndex < arrayOne.length && arrayTwoIndex < arrayTwo.length) {
            if (arrayOne[arrayOneIndex] < arrayTwo[arrayTwoIndex]) {
                sortedArray.push(arrayOne[arrayOneIndex++]);
            } else {
                sortedArray.push(arrayTwo[arrayTwoIndex++]);
            }
        }

        for (;arrayOneIndex < arrayOne.length; arrayOneIndex++) {
            sortedArray.push(arrayOne[arrayOneIndex]);
        }
        for (;arrayTwoIndex < arrayTwo.length; arrayTwoIndex++) {
            sortedArray.push(arrayTwo[arrayTwoIndex]);
        }
        //console.log("sortedArray",sortedArray);
        return sortedArray;
    }
}
console.log('The whole result',mergeSort([2,30,7,1,3,6,12,4,9]));