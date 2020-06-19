import React, { useReducer, useEffect } from 'react'

import Card from '../card'
import Control from '../control'
import { initialState } from './initialState'
import { reducer } from './reducer'
import { startAlgorithm, pauseAlgorithm, restartAlgorithm } from './action.js'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/a11y-dark.css'
import './index.css'

hljs.registerLanguage('javascript', javascript);

const text = `function* bubbleSortIndex(arrLength) {
    for (let x = 0; x < arrLength; x++) {
        for (let y = 0; y < arrLength - x - 1; y++) {
            yield y;
        };
    };

    return;
};`

const highlightedText = hljs.highlight('javascript', text).value

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
    const tags = [
        <span className="Card-pill">React.js</span>,
        <span className="Card-pill">Redux</span>,
        <span className="Card-pill">BubbleSort</span>,
        <span className="Card-pill">Algorithms</span>,
    ]

    useEffect(() => {
        return dispatch(restartAlgorithm())
    }, [])

    return (
        <Card 
            title="Bubble Sort"
            cta="view source"
            icon={<Control type={iconState} />}
            onClick={cardOnClick}
            tags={tags}
        >
            <div className="bar-container row p-4">
                { renderBars(state.arr) }
                <div className="bar-description">
                    <div className="bar-description-section">
                        <h3 className="bar-description-title">Description</h3>
                        <p className="bar-description-body">
                            Bubble sort is a classic algorithm that arranges elements in a list or array into asscending
                            or descending order. The essential component of the algorithm is the comparrison of each element
                            such that the element at index (referred to as A) is compared with the element at index + 1 (referred to as B).
                            If A is greater than B, then a swap is performed where A is placed in B's position and visa-versa. 
                            This comparrison is checked on each item of the array N x N where N is the length of the array.
                        </p>
                    </div>
                    <div className="bar-description-section">
                        <h3 className="bar-description-title">Behind the scenes</h3>
                        <p className="bar-description-body">
                            The above is more than just an animation - the actual algorithm is being ran. On each iteration of
                            the algorithm, the state of the array changes and is represented in the DOM (thanks to React.js).
                            State is handled using redux or React.js's version "use-reducer." JavaScript Generators were utilized 
                            to retrieve the current iteration scene by scene, so that the algorithm could run asyncrounously
                            and in spaced intervals.
                        </p>
                        <div />
                        <pre className="bar-code-block">
                            <code
                                className="javascript hljs"
                                dangerouslySetInnerHTML={{ __html: highlightedText}}
                            />
                        </pre>
                    </div>
                </div>
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
        if ((hasStarted && isPaused) || (!hasStarted && !isFinished)) {
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