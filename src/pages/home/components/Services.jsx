import '../style.css'
import '../style.mobile.css'
import { useState } from 'react'

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
					<button onClick={toggleOpen} className={!open ? 'services-card-btn': 'services-card-btn-open'}>See More</button>
				</div>

				{
					open 
					&&
					<div className='services-card-cnt-btm'>
						<div>
							<img />
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
			<ServicesCard no='01' title='Web Development' content='Lorem ipsum dolor si amet lori i dont even understand one shit that this lorem ipsum means. I mean what language is it sef' />
			<ServicesCard no='02' title='Design System' content='Lorem ipsum dolor si amet lori i dont even understand one shit that this lorem ipsum means. I mean what language is it sef' />
			<ServicesCard no='03' title='Testing' content='Lorem ipsum dolor si amet lori i dont even understand one shit that this lorem ipsum means. I mean what language is it sef' />
			<ServicesCard no='04' title='Web Animations' content='Lorem ipsum dolor si amet lori i dont even understand one shit that this lorem ipsum means. I mean what language is it sef' />
		</div>
	)
}

export function Services () {
	return (
		<div className='services'>
			<ServicesTop />
			<ServicesBtm />
		</div>
	)
}