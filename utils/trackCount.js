// SORT STEPS

export function selectionSortSteps(arr){
    const steps = []
    const copy = [...arr]

    for(let i = 0; i < copy.length; i++){
        let lowestIndexNumber = i

        for(let j = i + 1; j < copy.length; j++){
            if(copy[j] < copy[lowestIndexNumber]){
                lowestIndexNumber = j
            }
        }

        if(lowestIndexNumber !== i){
            let temp = copy[i]
            copy[i] = copy[lowestIndexNumber]
            copy[lowestIndexNumber] = temp
        }

        steps.push({
            array: [...copy],
            sortedUpTo: i,
            swappedIndex: lowestIndexNumber
        })
    }

    return steps
}

export function insertionSortSteps(arr){
    const steps = []
    const copy = [...arr]

    for(let i = 1; i < copy.length; i++){
        let temp = copy[i]
        let j
        for(j = i - 1; j >= 0 && copy[j] > temp; j--){
            copy[j + 1] = copy[j]
        }
        copy[j + 1] = temp

        steps.push({
            array: [...copy],
            sortedUpTo: i,
            insertedAt: j + 1
        })
    }

    return steps
}

// SEARCH STEPS

export function linearSearchSteps(arr, target){
    const steps = []

    for(let i = 0; i < arr.length; i++){
        const found = arr[i] === target

        steps.push({
            array: [...arr],
            checking: i,
            found: found,
            result: found ? i : -1
        })

        if(found) return steps
    }

    // target not found — mark final step
    steps[steps.length - 1].result = -1
    return steps
}

export function binarySearchSteps(arr, target){
    const steps = []
    let left = 0
    let right = arr.length - 1

    while(left <= right){
        let middle = Math.floor((left + right) / 2)
        const found = arr[middle] === target

        steps.push({
            array: [...arr],
            left,
            middle,
            right,
            found: found,
            result: found ? middle : -1
        })

        if(found) return steps

        if(arr[middle] < target){
            left = middle + 1
        } else {
            right = middle - 1
        }
    }

    // target not found — mark final step
    steps[steps.length - 1].result = -1
    return steps
}