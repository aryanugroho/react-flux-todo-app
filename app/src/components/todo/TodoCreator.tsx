/// <reference path="../../../../typing/react.d.ts" />

import * as React from 'react';
import TodoActions from '../../actions/TodoActions';

class TodoInserter extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {};
  }

  create(text: string): void {
    debugger;
    TodoActions.create(text);
  }

  changeText(ev) : void {
    TodoActions.changeText(ev.target.value);
  }

  render() {
    return (
      <div>
        <input type="text"
          onChange={this.changeText.bind(this)}>
        </input>
          <button onClick={this.create.bind(this, this.props.text)}>
            Insert
          </button>
      </div>
    );
  }
}

export default TodoInserter;
