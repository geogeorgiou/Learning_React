import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';


//remember to neatly use the String literals of ES6
//we can actually get the props value passed to the component

const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;            
    }                                                 
`;

class App extends Component {

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

        //the render method executes when React wants to render
        //so whatever code is inserted here it gets executed before rendering

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={(event) => this.nameChangedHandler(event, person.id)}/>;
                        })
                    }
                </div>
            );

            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //     backgroundColor: 'salmon',
            //     color: 'black'
            // };
        }

        //class Definitions
        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>Hi I am A React Dev</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                {/*<button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>*/}
                <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </StyledButton>

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

