import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

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
        { id:'p1',name: 'Maximilian', age: 28 },
        { id:'p2',name: 'Manu', age: 29},
        { id:'p3',name: 'Steph', age: 2}
    ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); 
    // this !doesShow makes it as really toggle. false -> ture, true -> false
  }


  deletePersonHandler = (personIndex) => {

    //const persons = this.state.persons.slice(); 
    //copy a new array to variable persons. rather than a pointer.

    //we can also use ES6 new feature: spread operator.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    {//another approach to create a new copy of object
      //const person = Object.assign({}, this.state.persons[personIndex])
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState ({
      persons: persons
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer',
      
    };   //inline styling    only working within this scope...

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person click={() => this.deletePersonHandler(index)}
            name={person.name} age={person.age}
            key={person.id} //key attribute.
            changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })};

          {
          /*
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
          */
          }

        </div> 
      );
      


      /*  Hover selector:Definition and Usage
      The :hover selector is used to select elements when you mouse over them.
      Tip: The :hover selector can be used on all elements, not only on links.
      Tip: Use the :link selector to style links to unvisited pages, the :visited 
      selector to style links to visited pages, and the :active selector to style 
      the active link.
      Note: :hover MUST come after :link and :visited (if they are present) in the 
      CSS definition, in order to be effective!
      */
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      } //psedo selector

    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2 ) {
      assignedClasses.push(classes.red); // push function...
    }
    if(this.state.persons.length <=1 ) {
      assignedClasses.push(classes.bold);
    }

    return (
       
      <div className={classes.App}>
        <h1>Hi, Im a react App..</h1>
        <p className={assignedClasses.join(' ')}>This is really working.</p>
        <button
        style={style} 
        onClick={this.togglePersonsHandler}>Toggle Name</button>

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
