import React from "react";
import {Component} from 'react';
import {TodoItem} from "../../types/actionTypes";
import {TodoState} from "../../types/todoTypes";
import {Dispatch} from "redux";
import {deleteTodoItem} from "../../actions/todoActions";
import {connect} from "react-redux";

type TodoListProps = {
    todoItems : Array<TodoItem>,
    deleteTodoItem(id: number): void
}

class TodoList extends Component<TodoListProps, any>{

    deleteItem = (id : number) => {
        this.props.deleteTodoItem(id)
    };

    render(){
        return (
            <ul>
                {this.props.todoItems.map(todo => {
                    return (
                        <li key={todo.id} className="todo">
                            <label htmlFor="">
                                <input type="checkbox"/>
                                <span>{todo.title}</span>
                                <i onClick={() => this.deleteItem(todo.id)} className="material-icons red-text">
                                    delete
                                </i>
                            </label>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

const mapStateToProps = (state : TodoState) => {
    return{
         todoItems: state.todoItems
    }
};

const mapDispatchToProps = (dispatch : Dispatch) =>{
    return{
        deleteTodoItem: (id: number) => {
            dispatch(deleteTodoItem(id))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)