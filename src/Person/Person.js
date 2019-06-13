// This is another form to create a component. By a javascript function.
// Remember: we are uisng ES6 features : "const" key word and arrow functions
import React from 'react';
import './Person.css';


const person = (props) => {   // using of props: like arguments. passing atributes.


    return (
        <div className="Person" >
            <p onClick={props.click}>I'm a {props.name} I am {props.age} years old.</p>
            <p>{props.children}</p>    
            <input type="text" onChange={props.changed} value={props.name} />   
        </div>
    )
    // children refers to  any elements between the openring / closing tags
    //output dynamic content: first try 
    // Remember the  {} .  We can call functions in it.  

};





export default person;