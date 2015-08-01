/// <reference path="../../typing/react.d.ts" />

import Example from './example';
import ColorStore from './stores/ColorStore';
import ChangeColorAction from './actions/ChangeColorAction';

class App extends React.Component<any> {
  constructor(props) {
    super(props);
    this.state = {};

  }

  componentDidMount(): void {
    let self = this;
    ColorStore.on('change', (ev) => {
      self.setState({
        allColors: ColorStore.getAll()
      });
    });
  }

  getInitialState(): Object {
    return {
      color: '#99FFAA',
      allColors: ColorStore.getAll(),
      changedColor: null
    };
  }

  change(event): void {
    let color: string = event.target.value;
    ChangeColorAction.changeColor(color);

    this.setState({
      color: color,
      allColors: ColorStore.getAll()
    });
  }

  insert(color: string): void {
    if (this.state.color) {
      ChangeColorAction.insertColor(color);
    }
  }

  render() {
    let divStyle = {
      backgroundColor: this.state.color,
      width: this.props.width,
      height: this.props.height
    };

    return (
      <div>
        <Example />

        <input type="color" onChange={this.change.bind(this)}>
        </input>
        <button onClick={this.insert.bind(this, this.state.color)}>
          Insert
        </button>

        <div className={"box"} style={divStyle}>
        </div>
      </div>
    );
  }
}
