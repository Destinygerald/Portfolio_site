import './App.css'
import './App.mobile.css'

export function Navbar () {
	return (
		<div className='navbar'>
			<div>Destiny</div>

			<div className='nav-list'>
				<span>Services</span>
				<span>Work</span>
				<span>About</span>
			</div>

			<div>+234 902 220 1263</div>
		</div>
	)
}