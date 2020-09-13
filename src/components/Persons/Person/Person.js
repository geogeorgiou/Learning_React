import React, {Component} from 'react';
import classes from './Person.css'


//(using styled-components) returns a component
//but we use it just as a result not with StyledDiv = () =>



//ES6 variable feature
class Person extends Component {

    render() {
        console.log('[Person.js] rendering');

        //and use of JSX syntax
        return (
            // <div className="Person" style={style}>
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }


}

export default Person;