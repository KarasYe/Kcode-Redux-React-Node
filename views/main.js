//CSS
import '../public/stylesheets/App.scss'

//node_modules
import React from 'react'
import {
	render
} from 'react-dom'
import {
	Provider
} from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import {
	ConnectedRouter
} from 'react-router-redux'

//component
import AppComponent from './components/AppComponent.jsx'
import Todo from './containers/Todo.jsx'
import ClockDemo from './components/Clock.jsx'
import CopyInput from './components/CopyInput.jsx'
import OtherApp from './components/OtherApp.jsx'
import FilterableProductTable from './components/FPT.jsx'
import NotFound from './components/NotFound'
//
import configureStore from './stores/configureStore'

const history = createHistory()
const store = configureStore()
const routes = (
	<Router> 
		<AppComponent>
            <Switch>
                <Route exact path = "/" component = {Todo}/>
                <Route path = "/Todo" component = {Todo}/>
				<Route path = "/clock" component = {ClockDemo}/>
				<Route path = "/CopyInput" component = {CopyInput}/>
				<Route path = "/FPT" component = {FilterableProductTable}/>
				<Route path = "/OtherApp" component = {OtherApp}/>
				<Route path = "*" component = {NotFound} />
            </Switch>
        </AppComponent> 
    </Router>
)

render(
	<Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
	    <ConnectedRouter history={history}>
	      <div>
	      	{routes}
	      </div>
	    </ConnectedRouter>
  	</Provider>,
	document.getElementById('root')
)