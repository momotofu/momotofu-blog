import React from 'react'

const Control = ({ type }) => {
    return (
        <div className="Control">
            <div className={`Control-${type}`}/>
        </div>
    )
}

export default Control