import React, { useReducer } from 'react'

import Card from '../card'
import Control from '../control'
import { initialState } from './initialState'
import { reducer } from './reducer'
import { startAlgorithm, pauseAlgorithm, restartAlgorithm } from './action.js'
import './index.css'

const BubbleSort = () => {
    const [state, dispatch] = useReducer(reducer, initialState) 
    const cardOnClick = cardOnClickWrapper(
        state,
        dispatch,
        startAlgorithm.bind(null, dispatch, 50, state.arr.length),
        pauseAlgorithm,
        restartAlgorithm,
    )
    const iconState = getIconState(state) 

    return (
        <Card 
            title="Bubble Sort"
            cta="view source"
            icon={<Control type={iconState} />}
            onClick={cardOnClick}
        >
            <div className="bar-container row p-4">
                { renderBars(state.arr) }
            </div>
        </Card>
    )
}

function renderBars(data) {
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

function getIconState(state) {
    const { isPaused, isFinished, intervalID, hasStarted } = state

    if (isFinished) {
        return 'restart'
    } else if (hasStarted && !isPaused) {
        return 'pause'
    } else {
        return 'play'
    }
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

export default BubbleSort;