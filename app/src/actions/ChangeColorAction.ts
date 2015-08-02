import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

export default {
  changeColor(color: string): void {
    Dispatcher.dispatch({
      type: ActionTypes.CHANGE_COLOR_ACTION,
      color: color
    });
  }
};