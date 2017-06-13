//ES6
import React from 'react';
import { Link } from 'react-router-dom';

class AppComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      left: '',
      right: ''
    }
  }
  handleClick() {
    if (this.state.left === 0) {
      this.setState({
        left: -200,
        right: 0
      });
    } else {
      this.setState({
        left: 0,
        right: 200
      });
    }
  }
  handleClick2() {
    this.setState({
      left: -200,
      right: 0
    });
  }
  render() {
    return (
      <div className="index">
        <div className="showList" onClick={this.handleClick.bind(this)}>MENU</div>
        <nav style={{left: this.state.left +'px'}} onClick={this.handleClick2.bind(this)}>
          <Link to="/clock">Clock</Link>
          <Link to="/Todo">TodoList</Link>
          <Link to="/CopyInput">CopyInput</Link>
          <Link to="/OtherApp">OtherApp</Link>
        </nav>
        <div className="rightContent" style={{left: this.state.right +'px'}}>
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default AppComponent;