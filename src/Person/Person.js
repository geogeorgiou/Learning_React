import React, {Component} from 'react';
import classes from './Person.css'


//(using styled-components) returns a component
//but we use it just as a result not with StyledDiv = () =>



//ES6 variable feature
const person = (props) =>{

    //and use of JSX syntax
    return (
        // <div className="Person" style={style}>
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );

}

export default person;