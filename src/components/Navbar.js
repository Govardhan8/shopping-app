import { Link } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faUser,
	faHome,
	faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
	return (
		<>
			<nav>
				<div className='leftBlock'>
					{' '}
					<Link to='/'>
						<FontAwesomeIcon icon={faHome} />
					</Link>
				</div>

				<div className='rightBlock'>
					<Link to='/cart' className='cart'>
						<FontAwesomeIcon icon={faShoppingCart} />
					</Link>

					<Link to='/profile'>
						<FontAwesomeIcon icon={faUser} />
					</Link>
				</div>
			</nav>
		</>
	)
}

export default Navbar
