import React, { Component } from 'react';
import { render } from 'react-dom';
import { create, act } from 'react-test-renderer'

import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

export class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

let root; 
act(() => {
  root = create(<App />)
});
const tree = root.toJSON();
console.log(tree)

render(<App />, document.getElementById('root'));
