import React from 'react';

const Card = ({
    title,
    onClick,
    tags,
    cta,
}) => {
    return (
        <div className="Works-card" onClick={ onClick }>
        <h1 className="Works-card-title">{ title }</h1>
        <span className="Works-card-cta">
            <span className="Works-card-cta-bracket">&lt;</span>
            {cta}
            <span className="Works-card-cta-bracket">&gt;</span>
        </span>
        <div>
            { tags }
            <span className="Works-card-pill">...</span>
        </div>
        </div>
    )
}

export default Card