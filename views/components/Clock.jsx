//ES6
import React from 'react';

class ClockDemo extends React.Component {
	constructor() {
		super()
		this.state = {
			date: {},
			width: 220,
			height: 220
		}
	}
	componentWillMount() {
		let func = function() {
			this.setState({
				date: new Date()
			})
		}.bind(this)
		func()
		this.inc = setInterval(func, 1000)
	}
	componentDidMount() {
		this.canvasBackground();
	}
	componentWillUnmount() { 
		console.log(this.state.date) 
		clearInterval(this.inc) 
	}
	canvasBackground() {
		const context = this.refs.canvas.getContext('2d');
		let canvas_width = this.state.width;
		let canvas_height = this.state.height;
		let radius = Math.min(canvas_width / 2 - 3, canvas_height / 2 - 3);
		//初始化画布
		context.save();
		context.clearRect(0, 0, canvas_width, canvas_height);
		context.translate(canvas_width / 2, canvas_height / 2);
		context.rotate(-Math.PI / 2);
		context.save();

		//表框


		//小时刻度
		context.strokeStyle = "#fff";
		context.fillStyle = "#fff";
		context.lineWidth = 4;
		context.lineCap = "round";
		context.beginPath();
		for (var i = 0; i < 12; i++) {
			context.rotate(Math.PI / 6);
			context.moveTo(radius - 30, 0);
			context.lineTo(radius - 10, 0);

		}
		context.stroke();
		context.restore();
		context.save();

		//分钟刻度
		context.strokeStyle = "gray";
		context.fillStyle = "#fff";
		context.lineWidth = 2;
		context.beginPath();
		for (var i = 0; i < 60; i++) {
			if (!(i % 5 == 0)) {
				context.moveTo(radius - 15, 0);
				context.lineTo(radius - 10, 0);
			}
			context.rotate(Math.PI / 30);
		}
		context.stroke();
		context.restore();
		context.save();

		context.lineWidth = 3;
		context.strokeStyle = "#fff";
		context.beginPath();
		context.arc(0, 0, radius, 0, Math.PI * 2, true);
		context.stroke();
		context.restore();


		context.restore();
	}
	render() {
		var date = this.state.date
		var minutes = date.getMinutes()
		var seconds = date.getSeconds()
		var hours = date.getHours()
		var clockTime = date.toLocaleTimeString()
		var hour = (hours) % 12 * (360 / 12) + (360 / 12) * (minutes / 60)
		var minute = minutes * (360 / 60) + (360 / 60) * (seconds / 60)
		var second = seconds * (360 / 60)
		return (
			<div className="style">
        		
        		<canvas ref="canvas" width={this.state.width} height={this.state.height}></canvas>
		        <div className="container">
		          <div className="clockMinuteLine" style={{transform: 'rotateZ('+ minute +'deg)'}}></div>
		          <div className="clockHourLine" style={{transform:  'rotateZ('+ hour +'deg)'}}></div>
		          <div className="clockSecondLine" style={{transform: 'rotateZ('+ second +'deg)'}}></div>
		        </div>
		        <div className="clock"><h1>{clockTime}</h1></div>
      		</div>
		)
	}
}

export default ClockDemo;