/// <reference path="../../../../typing/react.d.ts" />
import * as React from 'react';
import TodoItem from './TodoItem';

class TodoLegend extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  render() {
    debugger;
    return (
      <div>
        <p>All: {this.props.count}</p>
        <p>Complete: {this.props.completeCount}</p>
        <p>Incomplete: {this.props.incompleteCount}</p>
      </div>
    );
  }
}

export default TodoLegend;