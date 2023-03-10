// 创建“外壳”组件App
import {Component} from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

  // 初始化状态
  state = {
    todos: [
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '睡觉', done: true},
      {id: '003', name: '打代码', done: false},
    ]
  }

  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos: newTodos})
  }

  editTodoChecked = (id, newValue) => {
    const {todos} = this.state
    todos.forEach((o) => {
      if(o.id === id) {
        o.done = newValue
      }
    })
    this.setState({todos: todos})
    console.log(todos)
  }

  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({todos: newTodos})
  }

  checkAllTodo = (done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      return {...todoObj, done: done}
    })
    this.setState({todos: newTodos})
  }

  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.done !== true
    })
    this.setState({todos: newTodos})
  }

  render() {
    const {todos} = this.state

    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
            <Header addTodo={this.addTodo}/>
            <List todos={todos} editTodoChecked={this.editTodoChecked} deleteTodo={this.deleteTodo}/>
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}

