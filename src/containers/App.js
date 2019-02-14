import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js, Inside Constrictor', props);
    this.state = { persons: [
          {id: '2312', name: 'Max', age:28},
          {id: '1231', name: 'John', age:21},
          {id: '4231', name: 'Alex', age:20}
      ],
      otherState: 'other state value',
      showPersons: false,
      toggleClicked: 0
    }
  }

  componentWillMount() {
    console.log('App.js Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('App.js Inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  // state = {
  //   persons: [
  //       {id: '2312', name: 'Max', age:28},
  //       {id: '1231', name: 'John', age:21},
  //       {id: '4231', name: 'Alex', age:20}
  //   ],
  //   otherState: 'other state value',
  //   showPersons: false
  // }

  nameChangedHandler = (event, id) => {
    const personIndex =this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
    
}

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
 
  togglePersonshandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,  
        toggleClicked: prevState.toggleClicked +1
      }
    });
  }

  render() {
    console.log('App.js Inside render()');
    // console.log("kkkkkkkkkkk", process.env.REACT_APP_APPNAME);
    let persons = null;

    if (this.state.showPersons) {
      persons =  <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.nameChangedHandler} />;
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}} >Show Persons</button>
        <Cockpit
        appTitle={this.props.title}
        showPersons={this.state.showPersons}
        persons={this.state.persons} 
        clicked={this.togglePersonshandler}/>
        {persons}
      </Aux>
    );
    //   return React.createElement('div', {className: 'App'}, React.createElement('h1',null,  'Hi I\'m a React App!!!'));
  }
}

export default withClass(App, classes.App);
