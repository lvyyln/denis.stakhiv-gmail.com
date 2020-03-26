import {TodoState} from "../types/todoTypes";
import {TodoItemsActionType, ADD_TODO_ITEM,DELETE_TODO_ITEM ,TodoItem} from "../types/actionTypes";

const initialState: TodoState = {
    todoItems: []
};


export function todoReducer(state = initialState, actions: TodoItemsActionType): TodoState {
    switch (actions.type) {
        case ADD_TODO_ITEM:
            return {
                todoItems: [...state.todoItems, actions.payload]
            };
        case DELETE_TODO_ITEM:
            return {
                todoItems : state.todoItems.filter(item => item.id !== actions.payload)
            };
        default:
            return{
                todoItems : state.todoItems
            }

    }
}