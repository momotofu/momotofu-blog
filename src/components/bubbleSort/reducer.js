import { shouldSwap, swap } from './utils.js'

export const reducer = (state, action) => {
    // console.log('state: ', state, ' action: ', action)
    switch (action.type) {
        case 'START':

            return {
                ...state,
                nextIndex: (state.isPaused || !state.hasStarted)
                    ? action.nextIndex
                    : state.nextIndex,
                isPaused: false,
                isFinished: false,
                hasStarted: true,
                intervalID: action.intervalID,
            }

        case 'PAUSE':
            return {
                ...state,
                intervalID: null,
                isPaused: true,
            }

        case 'RESTART':
            return {
                ...state,
                arr: state.backup.slice(),
                intervalID: null,
                isPaused: false,
                hasStarted: false,
                isFinished: false,
            }

        case 'TICK': 
            const nextIndexObject = state.nextIndex ? state.nextIndex.next() : null
            if (!nextIndexObject) 
                return state

            if (nextIndexObject.done) {
                clearInterval(state.intervalID)
                return {
                    ...state,
                    arr: state.arr.map((item) => { 
                        item.isActive = false
                        return item
                    }),
                    isFinished: true,
                    intervalID: null,
                    hasStarted: false,
                }
            }

            const nextIndex = nextIndexObject.value
            const arr = state.arr

            // Perform bubbleSort logic, set swapped item to active, while deactivating the rest
            if (shouldSwap(nextIndex, nextIndex + 1, arr)) {
                const nextArr = swap(nextIndex, nextIndex + 1, state.arr).map((item, index) => {
                    if (index === nextIndex + 1) {
                        item.isActive = true
                    } else {
                        item.isActive = false
                    }

                    return item
                })
                
                return {
                    arr: nextArr,
                    ...state
                }

            } else {
                return state
            }

        default:
            return state
    }
}