import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/TodoActionTypes';

export default {
  changeText(text: string): void {
    Dispatcher.dispatch({
        type: ActionTypes.CHANGE_TODO_TEXT_ACTION,
        text: text
    });
  },

  check(todo: any, val: any): void {
    Dispatcher.dispatch({
        type: ActionTypes.CHECK_TODO_ACTION,
        todo: todo,
        val: val
    });
  },

  create(text: string): void {
    Dispatcher.dispatch({
        type: ActionTypes.CREATE_TODO_ACTION,
        text: text
    });
  }
};