import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary'
import withClass from "../../../hoc/withClass";
import classes from './Person.css'


//(using styled-components) returns a component
//but we use it just as a result not with StyledDiv = () =>



//ES6 variable feature
class Person extends Component {

    render() {
        console.log('[Person.js] rendering');

        //and use of JSX syntax
        return(

            // instead of <div className="Person" style={style}> use Aux hoc
            //INSTEAD of Aux hack you can use the built in React.Fragment or Fragment if you import Fragment
            <Aux>
                <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="i2">{this.props.children}</p>
                <input key="i3" type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>

        );

    }


}

export default withClass(Person, classes.Person);