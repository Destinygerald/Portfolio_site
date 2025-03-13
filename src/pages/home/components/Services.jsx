import '../style.css'
import '../style.mobile.css'
import { useState } from 'react'
import Hutt from '/images/hutt.webp'
import Fraij from '/images/fraij.webp'
import JetLog from '/images/jetlog.webp'
import Grevt from '/images/grevt.webp'

function ServicesCard ({ no, title, image, content }) {

	const [ open, setOpen ] = useState(false)

	function toggleOpen () {
		setOpen(!open)
	}

	return (
		<div className={!open ? 'services-card' : 'services-card open'}>
			<div>{no}</div>

			<div className='services-card-cnt'>
				<div className='services-card-cnt-top'>
					<span>{title}</span>
					<button onClick={toggleOpen} className={!open ? 'services-card-btn': 'services-card-btn-open'}>See { open ? 'Less' : 'More'}</button>
				</div>

				{
					open 
					&&
					<div className='services-card-cnt-btm'>
						<div>
							<img src={image} />
						</div>

						<span>
							{content}
						</span>
					</div>		
				}
			</div>
		</div>
	)
}

function ServicesTop () {
	return (
		<div className='services-top'>
			<div className='services-top-left'>
				<span>Services</span>
				<span>Bringing your visons to reality</span>
			</div>

			<div className='services-top-right'>
				As a skilled frontend developer, I offer a range of services to help bring your digital visons to life; Delivering high-quality solutions that exceed expectation while striving for perfection in every project.
			</div>
		</div>
	)
}

function ServicesBtm () {
	return (
		<div className='services-btm'>
			<ServicesCard no='01' title='Web Development' content='Building web apps and websites with tools like React and Nodejs' image={Grevt} />
			<ServicesCard no='02' title='Design System' content='Engage in the Process of planning the layout of a system.' image={JetLog} />
			{/* <ServicesCard no='03' title='Testing' content='Lorem ipsum dolor si amet lori i dont even understand one shit that this lorem ipsum means. I mean what language is it sef' /> */}
			<ServicesCard no='03' title='Web Animations' content='Making interactive interactions and animations to improve web experiences.' image={Fraij} />
		</div>
	)
}

export function Services () {
	return (
		<div className='services' id="services">
			<ServicesTop />
			<ServicesBtm />
		</div>
	)
}