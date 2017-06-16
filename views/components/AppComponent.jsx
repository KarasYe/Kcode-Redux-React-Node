//ES6
import React from 'react'
import { Link } from 'react-router-dom'

class AppComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      left: '',
      right: '',
      imgWidth: '20%',
      menuState: false
    }
    this.openMenu = {
        left: 0,
        right: 200,
        imgWidth: '66.6%',
        menuState: true
    }
    this.closeMenu = {
        left: -200,
        right: 0,
        imgWidth: '20%',
        menuState: false
    }
  }
  handleClick() {
    if (this.state.left === 0) {
      this.setState(this.closeMenu)
    } else {
      this.setState(this.openMenu)
    }
  }
  handleClick2() {
    this.setState(this.closeMenu)
  }
  render() {
    let menu = [];
    if (this.state.menuState) {
      menu.push(
        <div key = "menu-down">  
          <span className = "glyphicon glyphicon-chevron-down">
          </span>
          <span>
            Close menu
          </span>
        </div>
      )
    } else {
      menu.push(
        <div key = "menu-hamburger">
          <span className = "glyphicon glyphicon-menu-hamburger">
          </span>
          <span>
            Open menu
          </span>
        </div>
      )
    }
    return (
      <div className = "index">
        <div className = "bs-glyphicons" onClick = {this.handleClick.bind(this)}>
          <img style = {{width: this.state.imgWidth}} src = "/public/images/karasLogo.jpg"/>
          {menu}
        </div>
        <nav style = {{left: this.state.left + 'px'}} onClick = {this.handleClick2.bind(this)}>
          <Link to = "/clock">Clock</Link>
          <Link to = "/Todo">TodoList</Link>
          <Link to = "/CopyInput">CopyInput</Link>
          <Link to = "/FPT">FPT</Link>
          <Link to = "/Comment">Comment</Link>
          <Link to = "/OtherApp">OtherApp</Link>
          <Link to = "https://github.com/KarasYe/Kcode-Redux-React-Node" className = "github" target = "_blank">@GitHub</Link>
        </nav>
        <div className = "rightContent" style = {{left: this.state.right + 'px'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default AppComponent