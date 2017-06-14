//ES6
import React from 'react'

class CopyInput extends React.Component {
	constructor() {
		super()
		this.state = {
			value: 'Hello React!'
		}
	}
	handleChange(e) {
		this.setState({
			value: e.target.value
		})
	}
	render() {
		return (
			<div className = "copy-input">
				<input type = "text" value = {this.state.value} onChange = {this.handleChange.bind(this)} />
				<p>{this.state.value}</p>
			</div>
		)
	}
}

export default CopyInput