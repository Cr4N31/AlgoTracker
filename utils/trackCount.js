//SORT
//const capitalized = arr.map(arr => arr.charAt(0).toUpperCase() + arr.slice(1))
;export function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let lowestIndexNumber = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[lowestIndexNumber]){
                lowestIndexNumber = j;
            }
        }
        if(lowestIndexNumber !== i){
            let temp = arr[i];
            arr[i] = arr[lowestIndexNumber];
            arr[lowestIndexNumber] = temp;
        }
    }
    return arr;
}

export function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let temp = arr[i];
        let j;
        for(j = i - 1; j >= 0 && arr[j] > temp; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}

//SEARCH 

export function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

export function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
        
    while(left <= right){
        let middle = Math.floor((left + right) / 2);
        if(arr[middle] === target){
            return middle;
        } else if(arr[middle] < target){
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
}