
import React, {Component} from 'react';
import Person from "./Person/Person";

class Persons extends Component {

    // static getDerivedStateFromProps(props, state){
    //
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //
    //     return state;
    // }

    //doing nothing is not an option here!
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponent Update')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return { message : "snapshot!" };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] ComponentDidUpdate with ');
        console.log(snapshot)
    }

    //executes write before we get rid of Persons component from the DOM
    componentWillUnmount() {
        console.log('[Persons.js] ComponentWIllUnmount');
    }


    render() {
        console.log('[Persons.js] rendering....');

        return this.props.persons.map((person, index) => {

            return <Person
                key={person.id}
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}/>;
        });
    }

}

export default Persons;
