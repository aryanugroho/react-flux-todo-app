/// <reference path="../../../typing/react.d.ts" />

import TodoStore from '../stores/TodoStore';
import TodoList from './todo/TodoList';
import TodoCreator from './todo/TodoCreator';
import TodoLegend from './todo/TodoLegend';
import * as React from 'react';
import TodoActions from '../actions/TodoActions';

function getTodoStoreData(): Object {
  return {
    allTodos: TodoStore.getAll(),
    todoCount: TodoStore.getCount(),
    completeCount: TodoStore.getCompleteCount(),
    incompleteCount: TodoStore.getIncompleteCount(),
    text: TodoStore.getText()
  };
}

class ChatApp extends React.Component<any, any> {
  color: string;

  constructor(props: any) {
    super(props);
    this.state = getTodoStoreData();
  }

  onCreate(text: string): void {
    TodoActions.create(text);
  }

  componentDidMount(): void {
    let self = this;

    TodoStore.on('change', (ev) => {
      self.setState(getTodoStoreData());
    });
  }

  render() {
    return (
      <div>
        <TodoCreator text={this.state.text} onCreate={this.onCreate} />
        <TodoList todos={this.state.allTodos} />
        <TodoLegend
          count={this.state.todoCount}
          completeCount={this.state.completeCount}
          incompleteCount={this.state.incompleteCount}
        />

      </div>
    );
  }
}

export default ChatApp;