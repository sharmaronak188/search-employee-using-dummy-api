import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className="card">
        <img src={props.employee.imageUrl} alt="Employee Initials" height="120" width="200" />
        <div className="container">
            <h1>{props.employee.firstName + " " + props.employee.lastName}</h1>
            <p>{props.employee.email}</p>
        </div>
    </div>
);