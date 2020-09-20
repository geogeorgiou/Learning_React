import React, {Component} from 'react';

import PropTypes from 'prop-types'
import Aux from '../../../hoc/Auxiliary'
import withClass from "../../../hoc/withClass";
import AuthContext from '../../../context/auth-context'

import classes from './Person.css'


//(using styled-components) returns a component
//but we use it just as a result not with StyledDiv = () =>



//ES6 variable feature
class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering');

        //and use of JSX syntax
        return(


            // instead of <div className="Person" style={style}> use Aux hoc
            //INSTEAD of Aux hack you can use the built in React.Fragment or Fragment if you import Fragment
            <Aux>
                <AuthContext.Consumer>
                    {
                        (context) =>
                        context.authenticated ? <p>Authenticated</p> : <p>Please log in!</p>
                    }
                </AuthContext.Consumer>
                <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="i2">{this.props.children}</p>
                <input
                    key="i3"
                    // ref={(inputEl) => {this.inputElement = inputEl}} //setting up a ref
                    ref={this.inputElementRef} //setting up a ref
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>

        );

    }


}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);