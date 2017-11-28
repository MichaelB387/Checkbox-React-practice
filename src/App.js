import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/Todoitem'

// Data Model
const items =[
  { description: 'First', completed: true},
  { description: 'Second', completed: true},
  { description: 'Third', completed: false}, 
]


// UI (view)
class App extends Component {
  render() {
    return (
      <div className="App">
      {
        items.map((item, index) => (
          <TodoItem
          description={ item.description}
          completed={item.completed}
          />
        )) 
      }
      </div>
    );
  }
}

export default App;
