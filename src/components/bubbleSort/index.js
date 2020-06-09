import React, { useReducer } from 'react'

import Card from '../card'
import { initialState } from './initialState'
import './index.css'

const reducer = (state, action) => {
    switch (action.type) {
        case 'IS_PLAYING':
            return state
        case 'IS_PAUSED':
            return state
        case 'RESTART':
            return state
        case 'TICK': 
            const nextIndexObject = state.nextIndex.next()
            const nextIndex = nextIndexObject.done ? null : nextIndexObject.value

            if (!nextIndex) 
                return state

            const arr = state.arr

            // Perform bubbleSort logic, set swapped item to active, while deactivating the rest
            if (shouldSwap(nextIndex, nextIndex + 1, arr)) {
                const nextArr = swap(nextIndex, nextIndex + 1, state.arr).map((item, index) => {
                    if (index === nextIndex + 1) {
                        item.isActive = true
                    } else {
                        item.isActive
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
                </div>
            )
        }
    )
}

const BubbleSort = () => {
    const [state, dispatch] = useReducer(reducer, initialState) 

    return (
        <Card 
            title="Bubble Sort"
            cta="view source"
            icon="play"
        >
            <div className="bar-container row p-4">
                { renderBars(state) }
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
    return itemA > itemB
}

function runBubbleSort(bubbleSort) {
    let nextArr
    setInterval(() => {
        
    }, 1000)
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
function updateList(nextList) {
    return {
      type: 'UPDATE_LIST',
      payload: nextList,
    }
}

function setActive(index) {
    return {
        type: 'SET_ACTIVE',
        payload: index,
    }
}