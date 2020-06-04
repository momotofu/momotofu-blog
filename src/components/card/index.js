import React from 'react';
import './index.css';

const Card = ({
    title,
    onClick,
    tags,
    cta,
    children,
}) => {
    return (
        <div className="Card" onClick={ onClick }>
        <h1 className="Card-title">{ title }</h1>
        <span className="Card-cta">
            <span className="Card-cta-bracket">&lt;</span>
            { cta }
            <span className="Card-cta-bracket">&gt;</span>
        </span>
            { children }
        <div>
            { tags }
            { tags ? <span className="Card-pill">...</span> : '' }
        </div>
        </div>
    )
}

export default Card