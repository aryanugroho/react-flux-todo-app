/// <reference path="../../../typing/react.d.ts" />

import ColorStore from '../stores/ColorStore';
import ColorInserter from './ColorInserter';
import ColorList from './ColorList';
import ChangeColorAction from '../actions/ChangeColorAction';
import * as React from 'react';

class ChatApp extends React.Component<any, any> {
  color: string;

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount(): void {
    let self = this;

    ColorStore.on('change', (ev) => {
      self.setState({
        allColors: ColorStore.getAll(),
        lastColor: ColorStore.getLastColor()
      });
    });
  }

  getInitialState(): Object {
    return {
      allColors: ColorStore.getAll(),
      lastColor: null
    };
  }

  changeColor(event: any): void {
    let color = event.target.value;
    this.setState({
      allColors: ColorStore.getAll(),
      lastColor: color
    });
  }

  render() {
    let lastColor = this.state.lastColor;
    let divStyle = {
      backgroundColor: lastColor,
      width: 200,
      height: 200
    };

    return (
      <div>
        <div style={divStyle}></div>
        <ColorInserter lastColor={this.state.lastColor} />
        <ColorList colors={this.state.allColors}/>
        <div className={"box"}>
        </div>
      </div>
    );
  }
}

export default ChatApp;