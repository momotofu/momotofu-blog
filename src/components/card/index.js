import React from 'react';
import './index.css';

const Card = ({
    title,
    onClick,
    tags,
    cta,
    children,
    icon,
}) => {
    return (
        <div className="Card" onClick={ onClick }>
            <div className="Card-heading">
                <div className="Card-heading-title">
                    <h1 className="Card-title">{ title }</h1>
                    {icon}
                </div>
                {cta ? 
                <span className="Card-cta">
                    <span className="Card-cta-bracket">&lt;</span>
                    { cta }
                    <span className="Card-cta-bracket">&gt;</span>
                </span>
                : ''}
            </div>
                { children }
            <div>
                { tags }
                { tags ? <span className="Card-pill">...</span> : '' }
            </div>
        </div>
    )
}

export default Card