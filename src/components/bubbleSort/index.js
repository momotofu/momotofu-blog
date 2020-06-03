import React, { useReducer } from 'react';

import Card from '../card'

const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const initialState = [
    {
        index: 0,
        isActive: false,
        value: 10,
    }
]

const BubbleSort = () => {
    const [state, dispatch] = useReducer(reducer, initialState) 

    return (
        <Card 
            title="Bubble Sort"
            cta="view source"
            icon="play"
        >
            <div>Hello</div>
        </Card>
    )
}

export default BubbleSort;