import React, { useReducer } from 'react'

import Card from '../card'
import { initialState } from './initialState'
import './index.css'

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_LIST':
            return action.payload;
        case 'SET_ACTIVE':
            return state.map( bar => {
                if (bar.index === action.payload)
                    return { ...bar, isActive: true }
                return {
                    ...bar,
                    isActive: false
                }
            })
        default:
            return state;
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

function runBubbleSort(bubbleSort) {
    let nextArr
    setInterval(() => {
        
    }, 1000)
}

function bubbleSort(arr, swap, x, y) {
    let nextArr = arr
    let shouldContinue = true
    const iterationCondition = x < arr.length
    const subIterationCondition = y < arr.length - x - 1;

    if (iterationCondition) {
       if (subIterationCondition) {
           if (arr[y] > arr[y + 1]) {
               nextArr = swap(y, y + 1, arr)
           }
       }
   } 

   const nextX = subIterationCondition ? x + 1 : x;
   const nextY = y + 1;

    if (iterationCondition)
        shouldContinue = false

   return [nextArr, nextX, nextY, shouldContinue]
}

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