import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import Profile from './components/Profile'
import Product from './components/Product'
import Navbar from './components/Navbar'

function App() {
	return (
		<div className='App'>
			<Router>
				<div className='pageContainer'>
					<Navbar />
					<Switch>
						<Route exact path='/cart'>
							<Cart />
						</Route>
						<Route exact path='/profile'>
							<Profile />
						</Route>
						<Route path='/product'>
							<Product />
						</Route>
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	)
}

export default App
