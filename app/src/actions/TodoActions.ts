import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/TodoActionTypes';

debugger;

export default {
  changeText(text: string): void {
    Dispatcher.dispatch({
        type: ActionTypes.CHANGE_TODO_TEXT_ACTION,
        text: text
    });
  },

  check(todo: any, checked: boolean): void {
    Dispatcher.dispatch({
        type: ActionTypes.CHECK_TODO_ACTION,
        todo: todo,
        checked: checked
    });
  },

  create(text: string): void {
    Dispatcher.dispatch({
        type: ActionTypes.CREATE_TODO_ACTION,
        text: text
    });
  }
};