/// <reference path="../../../typing/react.d.ts" />

import * as React from 'react';

class ColorItem extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    let divStyle = {
      width: 100,
      height: 20,
      border: '1px solid #fff',
      backgroundColor: this.props.color
    };

    return (
      <div style={divStyle}></div>
    );
  }
}

export default ColorItem;