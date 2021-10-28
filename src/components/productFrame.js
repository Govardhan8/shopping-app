import './productFrame.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Productframe = ({ product }) => {
	let title = product.title

	if (product.title.length > 37) {
		title = <h3 className='title'>{product.title.substring(0, 37)}...</h3>
	} else {
		title = <h3 className='title'>{product.title}</h3>
	}

	return (
		<div className='container'>
			<img src={product.image} alt={product.title} className='product-image' />
			{title}
			<div className='details'>
				<p className='rating'>
					<FontAwesomeIcon icon={faStar} />
					{product.rating.rate}
				</p>
				<p className='price'>$ {product.price}</p>
			</div>
		</div>
	)
}

export default Productframe
