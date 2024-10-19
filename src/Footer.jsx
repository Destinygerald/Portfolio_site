import './App.css'
import './App.mobile.css'
import { FaXTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'


export function Footer() {
	return (
		<div className='footer'>
			<span>Let's</span>

			<div>Get in <span>touch</span></div>

			<div>
				<span>geralddestiny7@gmail.com</span>
				
				<div>
					<span> <FaXTwitter /> </span>
					<span> <FaWhatsapp /> </span>
					<span> <FaLinkedinIn /> </span>
				</div>
			</div>

			<div className='footer-btm'>
				<div className='footer-btm-cnt'>
					<div>
						<span>Services</span>
						<span>Work</span>
						<span>About</span>
					</div>

					<span>Destiny</span>

					<span>+234 902 220 1263</span>
				</div>
				<div className='footer-btm-line'/>
			</div>
		</div>
	)
}