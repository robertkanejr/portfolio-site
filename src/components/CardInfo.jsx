import React from 'react';

function CardInfo(props) {
    return (
        <div className="b-card-info">
            <p className="b-card-title">{props.title}</p>
            <p className="b-card-subtitle">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </div>
    );
}

export default CardInfo;