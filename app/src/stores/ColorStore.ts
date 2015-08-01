/// <reference path="../../../typing/eventemitter2.d.ts" />

///import * as EventEmitter from 'eventemitter3';
import * as event from 'eventemitter2';
import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

let EventEmitter = event.EventEmitter2;
let CHANGE_EVENT = 'change';

// probably like this because they want to make it private
let _colors = [];

let _emitter = new EventEmitter();

function insert(color: string) : void {
  _colors.push(color);
}

let ColorStore = Object.assign(EventEmitter.prototype, {

  emitChange: () => {
    _emitter.emit(CHANGE_EVENT);
  },

  getAll: () => {
    return _colors;
  },

  /**
   * attaches a callback to a change event
   * @param {Function} callback to be executed on the event
   */
  addChangeListener: (callback: Function) => {
    // super.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: (callback: Function) => {
    // super.removeListener(CHANGE_EVENT, callback);
  }
});

Dispatcher.register((action) => {
  switch (action.type) {
    case ActionTypes.INSERT_COLOR_ACTION:
      if (action.color !== '') {
        insert(action.color);
        ColorStore.emitChange();
      }
  }
});

export default ColorStore;