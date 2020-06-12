import { bubbleSortIndex } from './utils.js'

export function startAlgorithm(dispatch, frameRate, arrLength) {
    const bsi = bubbleSortIndex(arrLength)
    const intervalID = setInterval(() => {
        dispatch(tick())
    }, frameRate)

    return {
        type: 'START',
        nextIndex: bsi,
        intervalID,
    }
}

export function tick() {
    return {
        type: 'TICK'
    }
}

export function pauseAlgorithm(intervalID) {
    clearInterval(intervalID)

    return {
        type: 'PAUSE'
    }
}

export function restartAlgorithm() {
    return {
      type: 'RESTART',
    }
}