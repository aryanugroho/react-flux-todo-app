/// <reference path="../../typing/react.d.ts" />

import ChangeColorAction from './actions/ChangeColorAction';
import * as React from 'react';
import Example from './example';

class BoxProps {
    public width: number;
    public height: number;
    public color: string;
}

class App extends React.Component<BoxProps, any> {
  constructor(props: BoxProps) {
    super(props);
    this.state = {};
  }

  getInitialState(): Object {
    return {
        color: '#99FFAA'
    };
  }

  change(event): void {
    let color: string = event.target.value;
    ChangeColorAction.changeColor(color);
    this.setState({
      color: color
    });

  }

  render() {
    let classNames:string = 'box';

    let divStyle = {
      backgroundColor: this.state.color,
      width: this.props.width,
      height: this.props.height

    };

    return (
      <div>
        <Example />
        <input type="color" onChange={this.change.bind(this)}></input>
        <div className={classNames} style={divStyle}>
        </div>
      </div>
    );
  }
}

 React.render(
    <App width={300} height={300} color={"#336699"} />,
    document.getElementById('example')
);