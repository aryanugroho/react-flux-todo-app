/// <reference path="../../../typing/eventemitter2.d.ts" />
/// <reference path="../../../typing/object-assign.d.ts" />

import * as event from 'eventemitter2';
import Dispatcher from '../dispatcher/Dispatcher';
import TodoActionTypes from '../constants/TodoActionTypes';
import assign = require('object-assign');
import Todo from '../models/Todo';

let EventEmitter = event.EventEmitter2;
let CHANGE_EVENT = 'change';

let _todos = [];
let _text = '';
function changeText(text: string): void {
  console.log(text);
  _text = text;
}

/**
 * Create a Todo Item
 * @param {string} text The Content of the Todo
 */
function create(text: string) : void {
  let id = Date.now();
  _todos.push(new Todo({
    id: id,
    complete: false,
    text: text
  }));
}

/**
 * Delete a todo item
 * @param {any} id [description]
 */
function destroy(id: any) : void {
  delete _todos[id];
}

/**
 * Checks a todo item
 * @param {boolean} checked whether the todo is checked
 */
function check(todo:any, checked: boolean): void {
  let index = _todos.indexOf(todo);
  _todos[index] = todo.set('complete', checked);
}

let TodoStore = assign(EventEmitter.prototype, <any> {

  emitChange: () => {
    this.default.emit(CHANGE_EVENT);
  },

  /**
   * Get the entire collection of todos
   * @return {object}
   */
  getAll: () => {
    return _todos;
  },

  getText: () => {
    return _text;
  },

  getComplete: () => {
    return _todos.filter((todo) => {
      return todo.complete;
    });
  },

  getIncomplete: () => {
    return _todos.filter((todo) => {
      return !todo.complete;
    });
  },

  getCount: () => {
    return _todos.length;
  },

  getCompleteCount: () => {
    return _todos.filter((todo) => {
      return todo.complete;
    }).length;
  },

  getIncompleteCount: () => {
    return _todos.filter((todo) => {
      return !todo.complete;
    }).length;
  },

   /**
   * @param {function} callback
   */
  addChangeListener: (callback: Function) => {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: (callback: Function) => {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

/**
 * TODO: Do those without a switch-case
 */
Dispatcher.register((action) => {
  let text = action.text;
  let checked = action.checked;

  switch (action.type) {
    case TodoActionTypes.CREATE_TODO_ACTION:
      if (text !== '') {
        create(text);
        TodoStore.emitChange();
      }
      break;

    case TodoActionTypes.CHANGE_TODO_TEXT_ACTION:
      if (text !== '') {
        changeText(text);
        TodoStore.emitChange();
      }
      break;

    case TodoActionTypes.CHECK_TODO_ACTION:
        check(action.todo, action.checked);
        TodoStore.emitChange();
      break;
  }
});

export default TodoStore;