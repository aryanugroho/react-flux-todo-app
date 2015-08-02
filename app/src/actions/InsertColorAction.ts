import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

export default {
  insertColor(color: string): void {
    Dispatcher.dispatch({
      type: ActionTypes.INSERT_COLOR_ACTION,
      color: color
    });
  }
};