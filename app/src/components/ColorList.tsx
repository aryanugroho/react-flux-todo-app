/// <reference path="../../../typing/react.d.ts" />
import * as React from 'react';
import ColorItem from './ColorItem';

class ColorList extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  render() {
    let colors = this.props.colors || [];

    let list = colors.map((color) => {
      return <ColorItem color={color} />
    });

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default ColorList;