//ES6
import React from 'react';

class LikeButton extends React.Component {
	constructor() {
		super()
		this.state = {
			liked: true,
			clicked: false,
			count: 0,
			count2: 0
		}
	}
	handleClick() {
		if (this.state.clicked) {
			if (this.state.liked) {
				alert("You have liked!");
			} else {
				alert("You haven't liked!");
			}
			return;
		}
		this.setState({
			clicked: true,
			liked: true,
			count: this.state.count += 1
		});
		alert("You have liked!");
	}
	handleClick2() {
		if (this.state.clicked) {
			if (this.state.liked) {
				alert("You have liked!");
			} else {
				alert("You haven't liked!");
			}
			return;
		}
		this.setState({
			clicked: true,
			liked: false,
			count2: this.state.count2 += 1
		});
		alert("You haven't liked!");
	}
	render() {
		var text = this.state.liked ? 'liked' : 'haven\'t liked';
		return (
			<div>
	        <p className="likeContent">
	          You {text} this.
	        </p>
		<div style={{height: '100px'}}>
	        <span className="like" onClick={this.handleClick.bind(this)}>{this.state.count}</span>
	        <span className="unlike" onClick={this.handleClick2.bind(this)}>{this.state.count2}</span>
	        </div>
	      </div>
		);
	}
}

class RepoList extends React.Component {
	constructor() {
		super()
		this.state = {
			loading: true,
			error: null,
			data: null
		}
	}

	componentDidMount() {
		this.props.promise.then(
			value => this.setState({
				loading: false,
				data: value
			}),
			error => this.setState({
				loading: false,
				error: error
			}));
	}

	render() {
		if (this.state.loading) {
			return <span>Loading...</span>;
		} else if (this.state.error !== null) {
			return <span>Error: {this.state.error.message}</span>;
		} else {
			var repos = this.state.data.items;
			var repoList = repos.map(function(repo, index) {
				return (
					<li key={index}><a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}</li>
				);
			});
			return (
				<main>
		          <p style={{textAlign: 'center'}}>Most Popular JavaScript Projects in Github</p>
		          <ol>{repoList}</ol>
        		</main>
			);
		}
	}
}

class OtherApp extends React.Component {
	render() {
		return (
			<div>
				<RepoList promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} />
				<Ass />
				<LikeButton />				
			</div>
		);
	}
}

class Ass extends React.Component {
	constructor() {
		super()
		this.state = {
			userInput: ''
		}
	}

	handleChange(e) {
		this.setState({
			userInput: e.target.value
		})
	}

	clearAndFocusInput() {
		// Clear the input
		this.setState({
			userInput: ''
		}, function() {
			// This code executes after the component is re-rendered
			this.refs.theInput.focus(); // Boom! Focused!
		})
	}

	render() {
		return (
			<div>
	          <div onClick={this.clearAndFocusInput.bind(this)}>
	            Click to Focus and Reset
	          </div>
	          <input
	          	type="text"
	            ref="theInput"
	            value={this.state.userInput}
	            onChange={this.handleChange.bind(this)}
	          />
        	</div>
		);
	}
}

export default OtherApp;