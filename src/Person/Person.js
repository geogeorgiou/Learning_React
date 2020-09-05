import React, {Component} from 'react';
import Radium from 'radium';
import './Person.css'

//ES6 variable feature
const person = (props) =>{

    const style = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    };

    //and use of JSX syntax
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );

}

export default Radium(person);