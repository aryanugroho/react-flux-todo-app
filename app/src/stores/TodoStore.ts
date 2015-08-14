/// <reference path="../../../typing/eventemitter2.d.ts" />
/// <reference path="../../../typing/object-assign.d.ts" />
/// <reference path="../../../typing/immutable.d.ts" />

import * as Immutable from 'immutable';
import * as event from 'eventemitter2';
import Dispatcher from '../dispatcher/Dispatcher';
import TodoActionTypes from '../constants/TodoActionTypes';
import assign = require('object-assign');
import Todo from '../models/Todo';

let EventEmitter = event.EventEmitter2;
let CHANGE_EVENT = 'change';

let _todos = Immutable.List<Todo>();

let _text = '';

/**
 * Tracks the last entered text for the todo about to be created
 */
function changeText(text: string): void {
  _text = text;
}

/**
 * Create a Todo Item
 * @param {string} text The Content of the Todo
 */
function create(text: string) : void {
  let id = Date.now();
  _todos = _todos.push(new Todo({
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
function check(todo: any, checked: boolean): void {
  let index = _todos.indexOf(todo);
  _todos = _todos.set(index, todo.set('complete', checked));
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

  /**
   * Get the last written text
   * @return {string}
   */
  getText: () => {
    return _text;
  },

  /**
   * Get all the complete todos
   * @return {Immutable.List}
   */
  getComplete: () => {
    return _todos.filter((todo) => todo.complete);
  },

  /**
   * Get all the incomplete todos
   * @return {Immutable.List}
   */
  getIncomplete: () => {
    return _todos.filter((todo) => !todo.complete);
  },

  /**
   * Gets the size of the todo list
   * @return {number}
   */
  getCount: () => {
    return _todos.size;
  },

  /**
   * Gets the count of the complete todos
   * @return {number}
   */
  getCompleteCount: () => {
    return _todos.filter((todo) => todo.complete).size;
  },

  /**
   * Gets the count of the incomplete todos
   * @return {number}
   */
  getIncompleteCount: () => {
    return _todos.filter((todo) => !todo.complete).size;
  },

  /**
   * Adds an event using the Event Emitter
   * @param {function} callback
   */
  addChangeListener: (callback: Function) => {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * Removes an event using the Event Emitter
   * @param {function} callback
   */
  removeChangeListener: (callback: Function) => {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

/**
 * TODO: make an interface for Payload
 */
Dispatcher.register((action: any) => {
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