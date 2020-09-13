import React, {Component} from 'react';
import classes from './App.css';

import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'
import Person from '../components/Persons/Person/Person';


class App extends Component {


    //constructor with props will make sure that
    //props is initialized correctly

    constructor(props) {
        super(props);
        console.log('[App.js] constructor')
    }



    //USE with care
    //only works in components (class based ones)
    //also in functional with Hooks

    state = {
        persons: [
            {id: 'asfa1a', name: "Max", age: 28},
            {id: 'jasaaa', name: "Manu", age: 22},
            {id: 'qweasd', name: "Stephanie", age: 18}
        ],
        otherState: 'some other value',
        showPersons: false
    }

    //Constructor >> getDerivedStateFromProps Lifecycle Hook
    // >> Render Hook with all the components in it

    static getDerivedStateFromProps(props, state){
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    //finally the component did mount Hook

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }


    nameChangedHandler = (event, id) => {


        const personIndex = this.state.persons.findIndex(person => {
            return person.id === id;
        })

        //DO NOT mutate the person directly but get deep copy
        //then change the value the person with personIndex

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;


        //DO NOT mutate the person array directly as well

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });

    }

    deletePersonHandler = (personIndex) => {

        //not the recommended way since we are mutating the reference
        // const persons = this.state.persons;
        //
        // //remove one element from the array
        // persons.splice(personIndex, 1);
        //
        // this.setState({persons: persons})

        //deep copy of array pasted into the persons variable
        // const persons = this.state.persons.slice();

        //OR ES6 FEATURE the spread operator
        const persons = [...this.state.persons];

        //remove one element from the array
        persons.splice(personIndex, 1);

        this.setState({persons: persons})
    }

    togglePersonsHandler = () => {

        const doesShow = this.state.showPersons;

        this.setState({showPersons: !doesShow})
    }

    render() {

        console.log('[App.js] render');


        //the render method executes when React wants to render
        //so whatever code is inserted here it gets executed before rendering

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
            );

        }



        return (
            <div className={classes.App}>

                <Cockpit
                    title={this.props.appTitle}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    clicked={this.togglePersonsHandler}/>

                {persons}

            </div>


            //   React.createElement('div', {className : 'App'},
            //       React.createElement('h1', null , 'Does work now?')
            //   )
        );
    }
}

export default App;

//React 16.8 feature -> HOOKS (only for functional based Components)
//so to convert rename the class App extends Component to ES6 equivalent
//import from REACT the HOOK (useState)
// const app = (props) => {
//
//     //USE with care
//     //only works in components (class based ones)
//     //also in functional with Hooks
//     //no more {this...}!!!
//
//     //stateArr contains 2 things
//     //1 -> current State
//     //2 -> function to updateState
//     const [personsState, setPersonsState] = useState({
//         persons : [
//             {name : "Max", age: 23},
//             {name : "Manu", age: 38},
//             {name : "Stephanie", age: 18}
//         ]
//     });
//
//     const [otherState, setOtherState] = useState({
//         otherState: 'Some other value'
//     })
//
//     console.log(personsState,otherState)
//
//     const switchNameHandler = () =>{
//         setPersonsState({
//             persons : [
//                 {name : "Maximilian", age: 26},
//                 {name : "Manu", age: 38},
//                 {name : "Stephanie", age: 8}
//             ]
//         });
//     }
//
//     return (
//         <div className="App">
//             <h1>Hi I am A React Dev</h1>
//             <button onClick={switchNameHandler}>Switch Name</button>
//             <Person
//
//                 name={personsState.persons[0].name}
//                 age={personsState.persons[0].age}/>
//             <Person
//                 name={personsState.persons[1].name}
//                 age={personsState.persons[1].age}>My Hobbies: Racing</Person>
//             <Person
//                 name={personsState.persons[2].name}
//                 age={personsState.persons[2].age}/>
//         </div>
//
//     );
// }
//
// export default app;

