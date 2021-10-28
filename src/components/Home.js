import { useState, useEffect, Suspense } from 'react'
import Productframe from './productFrame'
import './Home.css'
const Home = () => {
	const [allProducts, setAllProducts] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch('https://fakestoreapi.com/products/')
			const jsonData = await data.json()
			setAllProducts(jsonData)
		}
		fetchData()
	}, [])
	return (
		<div className='homeContainer'>
			<Suspense fallback={<h4>Loading</h4>}>
				{allProducts &&
					allProducts.map((product, index) => (
						<Productframe key={index} product={product} />
					))}
			</Suspense>
		</div>
	)
}

export default Home
