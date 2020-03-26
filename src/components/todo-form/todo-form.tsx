import React from "react";
import {Component} from 'react';
import {Dispatch} from "redux";
import {addTodoItem} from "../../actions/todoActions";
import {TodoItem} from "../../types/actionTypes";
import { connect } from "react-redux";

type TodoProps = {
    addTodoItem(todoItem : TodoItem) : void
}

type TodoState = {
    inputValue : string
}


class TodoForm extends Component<TodoProps, any> {

    state : TodoState = {
        inputValue : 'Data'
    };

    onChangeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        this.setState({inputValue : event.target.value} )
    };

    addTodoItem = (event : React.KeyboardEvent) => {
        if(event.key === 'Enter')
        this.props.addTodoItem({
                title : this.state.inputValue,
                id : Date.now()
            })
    };

    render() {
        return (
            <div className="input-field">
                <input
                    onChange={this.onChangeHandler}
                    value={this.state.inputValue}
                    onKeyPress={this.addTodoItem}
                    type = "text"/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch) =>{
    return{
        addTodoItem : (todoItem : TodoItem) => dispatch(addTodoItem(todoItem))
    }
};

export default connect(null,mapDispatchToProps)(TodoForm)

