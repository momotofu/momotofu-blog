import React, { useReducer } from 'react'

import Card from '../card'
import { initialState } from './initialState'
import './index.css'

const reducer = (state, action) => {
    console.log('state: ', state, ' action: ', action)
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
            console.log('should restart')
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

const renderBars = (data) => {
    return data.map( item => {
            const activeClass = item.isActive ? 'bar-active' : ''
            return (
                <div
                    className={'bar mr-3 ' + activeClass}
                    style={{ 'height': `${item.value}px` }}
                >
                    <span className='bar-value'>{item.value}</span>
                </div>
            )
        }
    )
}

const BubbleSort = () => {
    const [state, dispatch] = useReducer(reducer, initialState) 
    const cardOnClick = cardOnClickWrapper(
        state,
        dispatch,
        startAlgorithm.bind(null, dispatch, 50, state.arr.length),
        pauseAlgorithm,
        restartAlgorithm,
    )

    return (
        <Card 
            title="Bubble Sort"
            cta="view source"
            icon="play"
            onClick={cardOnClick}
        >
            <div className="bar-container row p-4">
                { renderBars(state.arr) }
            </div>
        </Card>
    )
}

export default BubbleSort;

function swap(indexA, indexB, arr) {
    const temp = arr[indexA]
    arr[indexA] = arr[indexB]
    arr[indexB] = temp
    return [ ...arr ]
}

function shouldSwap(index1, index2, arr) {
    const itemA = arr[index1]
    const itemB = arr[index2]
    return itemA.value > itemB.value
}

function cardOnClickWrapper(
    state,
    dispatch,
    startAlgorithm,
    pauseAlgorithm,
    restartAlgorithm,
    ) {
    const { isPaused, isFinished, intervalID, hasStarted } = state

    return () => {
        console.log(isPaused, isFinished, intervalID, hasStarted)
        if (hasStarted && isPaused || (!hasStarted && !isFinished)) {
            console.log('start')
            return dispatch(startAlgorithm())
        }

        if (isFinished) {
            console.log('restart')
            return dispatch(restartAlgorithm())
        }

        if (!isPaused) {
            console.log('pause')
            return dispatch(pauseAlgorithm(intervalID))
        }
    }
}

export function* bubbleSortIndex(arrLength) {
    for (let x = 0; x < arrLength; x++) {
        for (let y = 0; y < arrLength - x - 1; y++) {
            yield y
       }
   } 

   return
}

// Actions
function startAlgorithm(dispatch, frameRate, arrLength) {
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

function tick() {
    return {
        type: 'TICK'
    }
}

function pauseAlgorithm(intervalID) {
    clearInterval(intervalID)

    return {
        type: 'PAUSE'
    }
}

function restartAlgorithm() {
    return {
      type: 'RESTART',
    }
}