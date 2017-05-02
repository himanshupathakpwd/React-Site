import React, {Component} from 'react';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Application</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
