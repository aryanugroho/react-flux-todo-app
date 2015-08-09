/// <reference path="../../../typing/immutable.d.ts" />
/// <reference path="../../../typing/object-assign.d.ts" />
import * as Immutable from 'immutable';
import assign = require('object-assign');

let defaults : {[key: string]: any} = {
  id: -1,
  complete: false,
  text: 'none'
};

class Todo extends Immutable.Record(defaults) {
  public id: number;
  public complete: boolean;
  public text: string;

  constructor(props: { [key: string]: any }) {
    super(props);
  }
}

export default Todo;