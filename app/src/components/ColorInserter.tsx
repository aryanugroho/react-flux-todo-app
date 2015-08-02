/// <reference path="../../../typing/react.d.ts" />

import * as React from 'react';
import InsertColorAction from '../actions/InsertColorAction';
import ChangeColorAction from '../actions/ChangeColorAction';

class ColorInserter extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {};
  }

  insert(color: string): void {
    InsertColorAction.insertColor(color);
  }

  change(ev) : void {
    ChangeColorAction.changeColor(ev.target.value);
  }

  render() {
    return (
      <div>
        <input type="color"
          onChange={this.change.bind(this)}>
        </input>
          <button onClick={this.insert.bind(this, this.props.lastColor)}>
            Insert
          </button>
      </div>
    );
  }
}

export default ColorInserter;
