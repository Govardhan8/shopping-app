import { Link } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faUser,
	faHome,
	faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'
import Searchbar from './Searchbar'

const Navbar = ({ suggestions }) => {
	return (
		<>
			<nav>
				{' '}
				<Link to='/'>
					<FontAwesomeIcon icon={faHome} />
				</Link>
				<div className='inputBox'>
					<Searchbar suggestions={suggestions} />
				</div>
				<Link to='/cart' className='cart'>
					<FontAwesomeIcon icon={faShoppingCart} />
				</Link>
				<Link to='/profile'>
					<FontAwesomeIcon icon={faUser} />
				</Link>
			</nav>
		</>
	)
}

export default Navbar
