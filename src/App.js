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

onToggleItemAtIndex = (index) => {
    this.setState((prevState) =>{
      // Get current item 
      const items = prevState.items
      // Find the item with a particular index
      const item = items[index]
      // toggle completed f -> t, t -> f
      item.completed = !item.completed 
      // Return the changes we have
      return {
        items: items
      }  
    })
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
              this.onToggleItemAtIndex(index)
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
