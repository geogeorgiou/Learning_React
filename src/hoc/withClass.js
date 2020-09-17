import React from 'react';

//when changing a Component from class based to function that returns component
//but this way is better used when the component that is returned as a wrapper handles the logic, jsx or styles that we want
const withClass = (WrappedComponent, className) => {

    return (props) => (
        <div className={className}>
            <WrappedComponent />
        </div>
    )

}

export default withClass;