import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = classes.Button;

    if (props.showPersons) {
        btnClass = [classes.Button,classes.red].join(' ');
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);      
    }
    
    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <h1 className={assignedClasses.join(' ')}>This is working</h1>
            <button className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </Aux>
    );
};

export default cockpit;