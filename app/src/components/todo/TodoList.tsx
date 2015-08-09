/// <reference path="../../../../typing/react.d.ts" />
import * as React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  render() {
    let todos = this.props.todos || [];
    let list = todos.map((todo) => {
      return <TodoItem todo={todo} />
    });
    return (
      <div>
        {list}
      </div>
    );
  }
}

export default TodoList;