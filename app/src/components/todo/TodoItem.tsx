/// <reference path="../../../../typing/react.d.ts" />

import * as React from 'react';
import TodoActions from '../../actions/TodoActions';

class TodoItem extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  onChange(todo, ev) {
    TodoActions.check(this.props.todo, ev.target.checked);
  }

  render() {
    let divStyle = {
      width: 100,
      height: 20,
      border: '1px solid #fff',
      backgroundColor: this.props.color
    };

    return (
      <div>
        <input type="checkbox"
          onChange={this.onChange.bind(this, this.props.todo)}
        >{this.props.todo.text}</input>
      </div>
    );
  }
}

export default TodoItem;