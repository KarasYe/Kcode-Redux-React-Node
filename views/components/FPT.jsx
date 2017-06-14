//ES6
import React from 'react'
const $ = require('jquery')

class ProductCategoryRow extends React.Component {
	render() {
		return (<tr><th colSpan = "2">{this.props.category}</th></tr>);
	}
}

class ProductRow extends React.Component {
	render() {
		return (
			<tr>
	        <td>
	          <span className = {this.props.product.stocked ? "" :"unstocked"} >
	            {this.props.product.name}
	          </span>
	        </td>
	        <td>
	          <span className = {this.props.product.stocked ? "" :"unstocked"} >
	            {this.props.product.price}
	          </span>
	        </td>
	      </tr>
		)
	}
}

class ProductTable extends React.Component {
	constructor() {
		super()
		this.state = {
			data: []
		}
	}
	loadProducts() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({
					data: data
				});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		})
	}
	componentDidMount() {
		this.loadProducts()
	}
	render() {
		let rows = [];
		let lastCategory = null;
		this.state.data.forEach(function(product) {
			if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly) || (product.stocked && this.props.notStockOnly)) {
				return;
			}
			if (this.props.selectedCategory == product.category || this.props.selectedCategory === 'All' || !this.props.selectedCategory) {
				if (product.category !== lastCategory) {
					rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
				}
				rows.push(<ProductRow product={product} key={product.name} />);
				lastCategory = product.category;
			}
		}.bind(this));
		return (
			<table>
	        <thead>
	          <tr>
	            <th>Name</th>
	            <th>Price</th>
	          </tr>
	        </thead>
	        <tbody>{rows}</tbody>
	      </table>
		)
	}
}

class SearchBar extends React.Component {
	handleChange() {
		this.props.onUserInput(
			this.refs.filterTextInput.value,
			this.refs.inStockOnlyInput.checked,
			this.refs.notStockOnlyInput.checked
		)
	}
	render() {
		return (
			<form>
		        <input
		          type = "text"
		          placeholder = "Search..."
		          value = {this.props.filterText}
		          ref = "filterTextInput"
		          onChange = {this.handleChange.bind(this)}
		          className = "SearchBar"
		        />
		        <p className = "inStockOnly">
		          <input
		            type = "checkbox"
		            checked = {this.props.inStockOnly}
		            ref = "inStockOnlyInput"
		            onChange = {this.handleChange.bind(this)}
		          />
		          stock
		        </p>
		        <p className = "notStockOnly">
		          <input
		            type = "checkbox"
		            checked = {this.props.notStockOnly}
		            ref = "notStockOnlyInput"
		            onChange = {this.handleChange.bind(this)}
		          />
		          not stock
		        </p>
	        </form>
		)
	}
}

class CategorySelect extends React.Component {
	handleChange() {
		let opt = this.refs.selected.options[this.refs.selected.selectedIndex];
		this.props.onUserSelect(
			opt.value
		);
	}
	render() {
		return (
			<select ref = "selected" onChange = {this.handleChange.bind(this)}>
		        <option>All</option>
		        <option>Sporting Goods</option>
		        <option>Electronics</option>
		      </select>
		)
	}
}

class FilterableProductTable extends React.Component {
	constructor() {
		super()
		this.state = {
			filterText: '',
			inStockOnly: false,
			notStockOnly: false,
			selectedCategory: ''
		}
	}

	handleUserInput(filterText, inStockOnly, notStockOnly) {
		this.setState({
			filterText: filterText,
			inStockOnly: inStockOnly,
			notStockOnly: notStockOnly
		})
	}

	handleUserSelect(selectedCategory) {
		this.setState({
			selectedCategory: selectedCategory
		})
	}

	render() {
		return (
			<div className = "fpt">
		        <SearchBar
		          filterText = {this.state.filterText}
		          inStockOnly = {this.state.inStockOnly}
		          notStockOnly = {this.state.notStockOnly}
		          onUserInput = {this.handleUserInput.bind(this)}
		        />
		        <CategorySelect
		         selectedCategory = {this.state.selectedCategory} 
		         onUserSelect = {this.handleUserSelect.bind(this)}
		        />
		        <ProductTable
		          url = "./json/products.json" 
		          filterText = {this.state.filterText}
		          inStockOnly = {this.state.inStockOnly}
		          notStockOnly = {this.state.notStockOnly}
		          selectedCategory = {this.state.selectedCategory}
		        />
	      	</div>
		)
	}
}

export default FilterableProductTable