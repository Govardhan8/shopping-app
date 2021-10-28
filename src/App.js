import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import Profile from './components/Profile'
import Product from './components/Product'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react'

function App() {
	const [suggestions, setSuggestions] = useState([])
	localStorage.setItem('cart', 0)
	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch('https://fakestoreapi.com/products/')
			const jsonData = await data.json()
			const list = jsonData.map(({ title }) => title)
			setSuggestions(list)
		}
		fetchData()
	}, [])

	return (
		<div className='App'>
			<Router>
				<div className='pageContainer'>
					<Navbar suggestions={suggestions} />
					<Switch>
						<Route exact path='/cart'>
							<Cart />
						</Route>
						<Route exact path='/profile'>
							<Profile />
						</Route>
						<Route exact path='/product/:id'>
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
