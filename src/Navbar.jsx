import './App.css'
import './App.mobile.css'
import { useNavigate } from 'react-router-dom'

export function Navbar () {

	const navigate = useNavigate()

	function handleClick(arg) {
		navigate("/", { state: { targetId: arg } });
	}

	return (
		<div className='navbar' id='page-top'>
			<div>Destiny</div>

			<div className='nav-list'>
				<span onClick={() => handleClick('services')}>Services</span>
				<span onClick={() => handleClick('work')}>Work</span>
				<span onClick={() => handleClick('about')}>About</span>
			</div>

			<div>+234 902 220 1263</div>
		</div>
	)
}