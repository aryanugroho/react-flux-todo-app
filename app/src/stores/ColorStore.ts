/// <reference path="../../../typing/eventemitter2.d.ts" />
/// <reference path="../../../typing/object-assign.d.ts" />

import * as event from 'eventemitter2';
import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

import assign = require('object-assign');

let EventEmitter = event.EventEmitter2;
let CHANGE_EVENT = 'change';

let _colors = [];
let _lastColor = null;

function insert(color: string) : void {
  _colors.push(color);
}

function change(color: string): void {
  _lastColor = color;
}

let ColorStore = assign(EventEmitter.prototype, <any> {

  emitChange: () => {
    this.default.emit(CHANGE_EVENT);
  },

  getAll: () => {
    return _colors;
  },

  getLastColor: () => {
    return _lastColor;
  }
});

Dispatcher.register((action) => {
  switch (action.type) {
    case ActionTypes.INSERT_COLOR_ACTION:
      if (action.color !== '') {
        insert(action.color);
        ColorStore.emitChange();
      }
      break;
    case ActionTypes.CHANGE_COLOR_ACTION:
      if (action.color !== '') {
        change(action.color);
        ColorStore.emitChange();
      }
      break;
  }
});

export default ColorStore;