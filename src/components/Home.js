import { useState, useEffect, Suspense } from 'react'
import Productframe from './productFrame'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
	const [allProducts, setAllProducts] = useState([])
	const [renderedProducts, setRenderedProducts] = useState([])
	const [categories, setCategories] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch('https://fakestoreapi.com/products/')
			const catData = await fetch(
				'https://fakestoreapi.com/products/categories/'
			)
			const jsonData = await data.json()
			const category = await catData.json()
			setAllProducts(jsonData)
			setCategories(category)
			setRenderedProducts(jsonData)
		}
		fetchData()
	}, [])
	const changeCategory = (category) => {
		const newList = allProducts.filter(
			(product) => product.category === category
		)
		setRenderedProducts(newList)
	}
	return (
		<>
			<Suspense fallback={<h4>Loading</h4>}>
				<div className='category'>
					{categories &&
						categories.map((category) => (
							<button key={category} onClick={() => changeCategory(category)}>
								{category}
							</button>
						))}
					<button
						onClick={() => {
							setRenderedProducts(allProducts)
						}}
					>
						View All
					</button>
				</div>
				<div className='homeContainer'>
					{renderedProducts &&
						renderedProducts.map((product, index) => (
							<Link
								key={index}
								to={`/product/${index + 1}`}
								className='prod-link'
							>
								<Productframe product={product} />
							</Link>
						))}
				</div>
			</Suspense>
		</>
	)
}

export default Home
