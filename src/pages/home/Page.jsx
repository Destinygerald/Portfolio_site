import './style.css'
import './style.mobile.css'
import { Banner } from './components/Banner.jsx'
import { Services } from './components/Services.jsx'
import { Work } from './components/Work.jsx'

function Page () {
	return (
		<div className='homepage'>
			<Banner />
			<Services />
			<Work />
		</div>
	)
}

export default Page