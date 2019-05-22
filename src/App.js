import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  //this part only works in class that extends Component.
  //(for now. New features of React not like this,. Talk later...)
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29},
      { name: 'Steph', age: 26}
    ],
    showPersons: false
  }//persons is array of persons(JS objects)

  //this function is called below. in button. onClick.
  switchNameHandler = () => {
    //console.log('Was clicked!');
    // Dont do this!!!     ----->  this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29},
        { name: 'Steph', age: 2}
    ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); 
    // this !doesShow makes it as really toggle. false -> ture, true -> false
  }



  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };   //inline styling    only working within this scope...

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div> 
      )
    }


    return (
      <div className="App">
        <h1>Hi, Im a react App..</h1>
        <p>This is really working.</p>
        <button
        style={style} 
        onClick={this.togglePersonsHandler}>Switch Name</button>

        {persons}  
        {
        //this persons refers to variable persons defiend above
        }


        {
          /*  
        this.state.showPersons ?  // JSX syntax. By using {}, we actually writing JavaScript
        // this ? means: if this.state.showPersons is true. If true. render the following  
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
          </div> : null // here, : means "else". If state.showPersons is false.
          */
        } 

      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This works!'));
    //we dont really use code above but We have to understand what is going on herer.
    // Remember state property
  }

}

export default App;
