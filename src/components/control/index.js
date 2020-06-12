import React from 'react'

import './index.css'

const Control = ({ type }) => {
    return (
        <div className="Control">
            <div className={`Control-${type}`}/>
        </div>
    )
}

export default Control