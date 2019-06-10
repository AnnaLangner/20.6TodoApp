import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    text: 'task one'
                }, {
                    id: 2,
                    text: 'task two'
                }, {
                    id: 3,
                    text: 'task three'
                }
            ]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo = id => {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title={'Todo App'} todoList={this.state.data.length}/>
                <TodoList data={this.state.data} removeTodo={this.removeTodo}/>
            </div>
        );
    }
}
export default hot(module)(App);