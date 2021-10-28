import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Product = () => {
	const [product, setProduct] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const id = useParams()
			const url = 'https://fakestoreapi.com/products/' + id.id
			const data = await fetch(url)
			const jsonData = await data.json()
			setProduct(jsonData)
		}
		fetchData()
	}, [])

	return (
		<>
			{product && (
				<section className='productContainer'>
					<img src={product.image} alt={product.title} />
					<div className='productDetails'>
						<h2 className='productTitle'>{product.title}</h2>
						<div className='ratings'>
							<p className='stars'>
								<FontAwesomeIcon icon={faStar} />
								{product.rating.rate}
							</p>
							<p className='count'>{product.rating.count} reviews</p>
							<p className='price'>$ {product.price}</p>
						</div>

						<p className='desc'>
							<span>
								<b>Description</b>
							</span>
							<p>
								{product.description.length > 150
									? product.description.substring(0, 150) + '...'
									: product.description}
							</p>
						</p>
						<button className='add'>ADD TO CART</button>
					</div>
				</section>
			)}
		</>
	)
}

export default Product
