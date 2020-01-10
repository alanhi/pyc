import React, { Component } from 'react';
import './App.css';
import Uploader from './component/Uploader';
import { PrismCode } from './component/Highlighter'

class App extends Component {
  constructor() {
    super()
    this.state = {
      code: ''
    }
  }

  change = (str) => {
    console.log('get result:', str)
    this.setState({
      code: str
    })
  }

  render() {
    return (
      <>
        <div className="App">
          <Uploader className="uploader" change={this.change} />
          {this.state.code && this.state.code.trim() ? <PrismCode code={this.state.code} language="python" plugins={["line-numbers"]} /> : null}

        </div>
        <div className="beian"><a target="_blank" href="http://beian.miit.gov.cn" rel="noopener noreferrer">冀ICP备19014774号</a></div>
      </>
    );
  }
}

export default App;
