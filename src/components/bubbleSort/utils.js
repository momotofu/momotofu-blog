export function swap(indexA, indexB, arr) {
    const temp = arr[indexA]
    arr[indexA] = arr[indexB]
    arr[indexB] = temp
    return [ ...arr ]
}

export function shouldSwap(index1, index2, arr) {
    const itemA = arr[index1]
    const itemB = arr[index2]
    return itemA.value > itemB.value
}

export function* bubbleSortIndex(arrLength) {
    for (let x = 0; x < arrLength; x++) {
        for (let y = 0; y < arrLength - x - 1; y++) {
            yield y
       }
   } 

   return
}