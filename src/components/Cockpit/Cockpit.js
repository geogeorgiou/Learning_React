import React, {useEffect} from 'react'
import classes from "../../components/Cockpit/Cockpit.css";

const cockpit = (props) => {

    //pass a function to useEffect
    //which executes in every render cycle of Cockpit

    //in some essence it is componentDidMount and componentDidUpdate together
    //can use this as many times I want

    //[props.persons] means that if it changes then execute the nested function
    //[] this tells React that useEffect has no dependencies (runs only the 1st time) but nested code can never re-run!!!
    useEffect(() => {
        console.log('[Cockpit.js] use effect');
        //Http request here ...
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);

        //this particular anonymous function runs BEFORE useEffect
        //but AFTER the first render cycle!!!
        //Simply RUNS WHEN useEffect RUNS FOR THE LAST TIME SO TO SAY
        return () => {
            console.log('[Cockpit.js] Cleanup work in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd use effect');

        //this has no [] as second argument so it will execute in every update cycle
        return () => {
            console.log('[Cockpit.js] Cleanup work in 2nd useEffect');
        }

    })


    //class Definitions
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons){
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked} >
                Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;