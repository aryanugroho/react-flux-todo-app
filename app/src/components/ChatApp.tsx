/// <reference path="../../../typing/react.d.ts" />

import ColorStore from '../stores/ColorStore';
import TodoStore from '../stores/TodoStore';
import ColorInserter from './ColorInserter';
import TodoList from './todo/TodoList';
import TodoCreator from './todo/TodoCreator';
import TodoLegend from './todo/TodoLegend';
import ColorList from './ColorList';
import * as React from 'react';

class ChatApp extends React.Component<any, any> {
  color: string;

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount(): void {
    let self = this;

    TodoStore.on('change', (ev) => {
      self.setState({
        allTodos: TodoStore.getAll(),
        todoCount: TodoStore.getCount(),
        completeCount: TodoStore.getCompleteCount(),
        incompleteCount: TodoStore.getIncomplete(),
        text: TodoStore.getText()
      });
    });
  }

  getInitialState(): Object {
    return {
      allColors: ColorStore.getAll(),
      todos: [],
      lastColor: null
    };
  }

  render() {
    return (
      <div>
        <TodoCreator text={this.state.text} />
        <TodoList todos={this.state.allTodos} />
        <TodoLegend
          count={this.state.todoCount}
          completeCount={this.state.completeCount}
        />

      </div>
    );
  }
}

export default ChatApp;