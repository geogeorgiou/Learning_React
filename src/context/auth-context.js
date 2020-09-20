import React from 'react';

//doesnt really have to be an object just an array,string or a number counts

//it will be available wherever it is defined to! DEFAULT values doesnt matter!
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;