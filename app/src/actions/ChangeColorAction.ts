import Dispatcher = require('../dispatcher/Dispatcher');
import ActionTypes = require('../constants/ActionTypes');

export = {
  changeColor(color: string): void {
    Dispatcher.dispatch({
      type: ActionTypes.CHANGE_COLOR_ACTION,
      color: color
    });
  }
};