//ES6
import React from 'react';

let Remarkable = require('remarkable');
let RemarkableReactRenderer = require('remarkable-react');
let data = [{
	id: 1,
	author: "Pete Hunt",
	text: "This is one comment"
}, {
	id: 2,
	author: "Jordan Walke",
	text: "This is *another* comment"
}];

class CommentList extends React.Component {
	render() {
		var commentNodes = this.props.data.map(function(comment) {
			return (
				<Comment author={comment.author} key={comment.id}>
				{
					comment.text
				}
			        </Comment>
			);
		});
		return (
			<div className="commentList">
	        {commentNodes}
	      	</div>
		);
	}
}

class CommentFrom extends React.Component {
	constructor() {
		super()
		this.state = {
			author: '',
			text: '',
			authorEmpty: true,
			textEmpty: true
		}
	}
	handleAuthorChange(e) {
		this.setState({
			author: e.target.value,
			authorEmpty: e.target.value == "" ? true : false
		});
	}
	handleTextChange(e) {
		this.setState({
			text: e.target.value,
			textEmpty: e.target.value == "" ? true : false
		});
	}
	handleSubmit(e) {
		e.preventDefault(); //prevent
		var author = this.state.author.trim(); //remove the spaces
		var text = this.state.text.trim();
		var dateNow = new Date();
		var dateYMD = new Array(0)
		dateYMD.push(dateNow.getFullYear(), dateNow.getMonth() + 1, dateNow.getDate());
		var weekday = new Array(7)
		weekday[0] = "Sunday"
		weekday[1] = "Monday"
		weekday[2] = "Tuesday"
		weekday[3] = "Wednesday"
		weekday[4] = "Thursday"
		weekday[5] = "Friday"
		var time = dateYMD.join('-') + " " + dateNowDate().toLocaleTimeString() + " " + weekday[dateNow.getDay()];
		if (!text || !author) {
			return;
		}
		// TODO: send request to the server
		this.props.onCommentSubmit({
			author: author,
			text: text,
			time: time
		});
		this.setState({
			author: '',
			text: '',
			time: '',
			authorEmpty: true,
			textEmpty: true
		});
	}
	render() {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
	        <input
	          type="text"
	          placeholder="Your name"
	          value={this.state.author}
	          onChange={this.handleAuthorChange.bind(this)}
	          className = "yourName"
	        />
	        <textarea
	          type="text"
	          placeholder="Say something..."
	          value={this.state.text}
	          onChange={this.handleTextChange.bind(this)}
	          className="commentContent"
	        />
	        <input type="submit" value="submit" className={!this.state.authorEmpty && !this.state.textEmpty ? "submitButton" : "submitButton hide"} />
	      </form>
		);
	}
}

class CommentBox extends React.Component {
	render() {
		return (
			<div className="commentBox">
				<CommentList data={data} />
				<CommentFrom />
			</div>
		);
	}
}

class Comment extends React.Component {
	rawMarkup() {
		var md = new Remarkable();
		var rawMarkup = md.render(this.props.children.toString());
		return {
			__html: rawMarkup
		};
	}

	render() {
		return (
			<div className="comment">
	        <h2 className="commentAuthor">
	          {this.props.author}
	        </h2>
	        <span dangerouslySetInnerHTML={this.rawMarkup()} />
	        <p className="commentTime">{this.props.time}</p>
	      </div>
		);
	}
}

export default CommentBox;