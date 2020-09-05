import React, {Component} from 'react';
import styled from 'styled-components';
// import './Person.css'


//(using styled-components) returns a component
//but we use it just as a result not with StyledDiv = () =>

const StyledDiv = styled.div`
            width: 60%;
            margin: 16px auto;
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            padding: 16px;
            text-align: center;
        
            @media (min-width: 500px) {
            
                    width: 450px;
            
            }
`

//ES6 variable feature
const person = (props) =>{

    //and use of JSX syntax
    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    );

}

export default person;