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
        All: {this.props.count}
        Checked: {this.props.completeCount}
      </div>
    );
  }
}

export default TodoLegend;