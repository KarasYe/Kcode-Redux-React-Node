//ES6
import React from 'react';

class OfferAndEvent extends React.Component {
	render() {
		return (
			<main>
				<div className="hub-container">
					<SearchSection />
				</div>
			</main>
		)
	}
}

class SearchSection extends React.Component {
	render() {
		return (
			<div className="section-container">
				<div className="welcome-header">
			        <h1>Your Local Wedding Deals Events</h1>
			    </div>
			    <div className="page-info page-offers">
			        <p className="welcome-context">
			          <span>Love a deal? Who doesn’t?! Find discounts and wedding events near you.</span>
			        </p>
			        <SearchForm />
			    </div>
			</div>
		)
	}
}

class SearchForm extends React.Component {
	constructor() {
		super()
		this.state = {
			dropDownList: "input-wrap btn-group drop-down",
			dropDownState: false
		}
	}
	handleChange() {
		if (this.state.dropDownList.indexOf('open') < 0) {
			this.setState({
				dropDownList: "input-wrap btn-group drop-down open",
				dropDownState: true
			})
		} else {
			this.setState({
				dropDownList: "input-wrap btn-group drop-down",
				dropDownState: false
			})
		}
	}
	render() {
		return (
			<div className="search-form">
	          <div className="btn-group anchor selection">
	            <a className="btn btn-default default-anchor" href="#">Wedding Deals</a>
	            <a className="btn btn-default" href="#">Wedding Events</a>
	          </div>
	          <div className="input-container">
            	<div className={this.state.dropDownList} onClick={this.handleChange.bind(this)}>
            		<button className="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">
		                <span className="label" id="category-value">All Deals</span>
		                <span className="icon icon-general-caret-down"></span>
		                <span className="icon icon-general-caret-up"></span>
		            </button>
		            <DropDownList/>
            	</div>
              </div>
	        </div>
	  )
	}
}
 class DropDownList extends React.Component {
 	
 	render() {
 		return (
 			<ul className="list-unstyled xs-divider dropdown-menu search-list category-list" role="menu">
		        <li className="offer-drop-down active">
		            <span value="">All Deals</span>
		            <span className="icon icon-general-checkmark-selected-state"></span>
		        </li>
		        <li className="offer-drop-down">
		            <span data-code="" value="">Reception Venues</span>
		        </li>
		        <li className="offer-drop-down">
		            <span data-code="" value="">Reception Venues</span>
		        </li>
		        <li className="offer-drop-down hide">
		            <span data-code="" value="">Reception Venues</span>
		        </li>
            </ul>
 		)
 	}
 }

export default OfferAndEvent;