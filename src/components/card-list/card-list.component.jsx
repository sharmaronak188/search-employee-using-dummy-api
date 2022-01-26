import React from "react";
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => (
    <div className='card-list'>
        {props.employees.map((employee) => (
            <Card key={employee.id} employee={employee} />
        ))}
    </div>
);