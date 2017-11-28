import React, { Component } from 'react';
// import logo from './logo.svg';
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
      const beforeItems = prevState.items

      const afterItems = beforeItems.map((item, currentIndex) => {
        if (currentIndex === index) {
          return {...item, 
            completed: !item.completed
          }
        }
        else{
          return item
        }
      })
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

    const total = items.length
    let totalInComplete = 0
    let totalCompleted = 0 
    items.forEach((item) => {
      if (item.completed) {
        totalCompleted += 1
      }
      else{
        totalInComplete += 1
      }
    })

    return (
      <div className="App">
      <dl>
        <dt>Totals</dt>
        <dt>{total}</dt>

        <dt>Total Completed</dt>
        <dt>{totalCompleted}</dt>

        <dt>Total InComplete</dt>
        <dt>{totalInComplete}</dt>
      </dl>
      {
        items.map((item, index) => (
          <TodoItem
          key={index}
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

// challenge split todo items into complete and incomplete
