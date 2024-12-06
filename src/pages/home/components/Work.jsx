import '../style.css'
import '../style.mobile.css'
import Hutt from '/images/hutt.webp'
import Fraij from '/images/fraij.webp'
import JetLog from '/images/jetlog.webp'
import Grevt from '/images/grevt.webp'
import { useNavigate } from 'react-router-dom'

function WorkCard ({ img, content, title, year, link }) {
	
	const navigate = useNavigate()

	function handleClick () {
		navigate(link)
	}

	return (
		<div onClick={handleClick} className='work-card'>
			<div className='work-card-img'>
				<img src={img} />
			</div>

			<div className='work-card-cnt'>
				<div>
					<span>{title}</span>
					<span>{year}</span>
				</div>

				<div>{content}</div>
			</div>
		</div>
	)
}

export function Work () {
	return (
		<div className='work'>
			<div className='work-top'>
				<span>Work</span>
				<span>
					Showcasing my recent projects.
				</span>
			</div>

			<div className='work-cnt'>
				<WorkCard title='Hutt' link='/hutt' year='2024' content='Hutt is an oganization that specializes in interiors and furniture decoration. The Landingpage features an series of projects they have worked on.' img={Hutt} />
				<WorkCard title='Fraij' link='/fraij' year='2024' content='Get Real Time weather reading with Fraij. It implements a realtime API to display temperature and weather readings' img={Fraij} />
				<WorkCard title='JetLog' link='/jetlog' year='2024' content='Landing page for JetLog Shipping company. Using React and typescript to build the design' img={JetLog} />
				<WorkCard title='Grevt' link='/grevt' year='2024' content='Built a Landing page for a design studio to help promote their services.' img={Grevt} />
			</div>
		</div>
	)
}