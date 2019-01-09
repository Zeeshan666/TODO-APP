import React, { Component } from 'react';
import Todos from './Todos'
import Addform from './Addtodo'


class App extends Component {
state={
todos:[
{id:1,content:"buy milk" },
{id:2,content:"learn react"},
{id:3,content:"learn javacript"},
]
}

deltodo=(id)=>{
 let todos = this.state.todos.filter((todo)=>{
   return todo.id!== id
 })
 this.setState({
   todos:todos
 })

 

}
Addtodos=(add)=>{
  add.id= Math.random();
  let todos = [...this.state.todos,add];
  this.setState({
    todos:todos

  })
}
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo Apps </h1>
        <Addform addtodo={this.Addtodos}/>
        <Todos todo={this.state.todos} deltodo={this.deltodo} />
        
      </div>
    );
  }
}

export default App;
