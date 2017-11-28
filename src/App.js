import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/Todoitem'

// Data Model



// UI (view)
class App extends Component {
  // Data model
  state = {
    items: [
      { description: 'First', completed: true},
      { description: 'Second', completed: true},
      { description: 'Third', completed: false}, 
    ]
  }
  render() {
    const items = this.state.items
    return (
      <div className="App">
      {
        items.map((item, index) => (
          <TodoItem
          description={ item.description}
          completed={item.completed}
          onToggleCompleted={
            () => {
              console.log('TodoItem onToggleCompleted received', index)
            }
          }
          />
        )) 
      }
      </div>
    );
  }
}

export default App;
