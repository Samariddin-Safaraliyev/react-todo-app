import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
      editingIndex: null,
    };
  }

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  addOrEditTodo = () => {
    const { newTodo, todos, editingIndex } = this.state;
    if (newTodo.trim()) {
      if (editingIndex !== null) {
        todos[editingIndex] = newTodo;
        this.setState({ todos, newTodo: '', editingIndex: null });
      } else {
        this.setState({
          todos: [...todos, newTodo],
          newTodo: '',
        });
      }
    }
  };

  deleteTodo = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };

  editTodo = (index) => {
    this.setState({ newTodo: this.state.todos[index], editingIndex: index });
  };

  render() {
    return (
      <div className="todo-container">
        <h2 className="todo-header">Todo List</h2>
        <input
          type="text"
          className="todo-input"
          value={this.state.newTodo}
          onChange={this.handleChange}
          placeholder="Add or edit a task"
        />
        <button className="todo-button" onClick={this.addOrEditTodo}>
          {this.state.editingIndex !== null ? 'Edit' : 'Add'}
        </button>
        <ul className="todo-list">
          {this.state.todos.map((todo, index) => (
            <li key={index} className="todo-item">
              {todo}
              <div>
                <button
                  className="edit-button"
                  onClick={() => this.editTodo(index)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => this.deleteTodo(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
