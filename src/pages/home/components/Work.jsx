import '../style.css'
import '../style.mobile.css'

function WorkCard ({ img, content, title, year, link }) {
	return (
		<div className='work-card'>
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
				<WorkCard title='Hutt' year='2024' content='Lorem ipsum dolor si amet lori i dont even understand one shit that this lorem ipsum means. I mean what language is it sef, Lorem ipsum dolor si amet lori i dont even understand.'/>
				<WorkCard title='Hutt' year='2024' content='Lorem ipsum dolor si amet lori i dont even understand one shit that this lorem ipsum means. I mean what language is it sef, Lorem ipsum dolor si amet lori i dont even understand.'/>
				<WorkCard title='Hutt' year='2024' content='Lorem ipsum dolor si amet lori i dont even understand one shit that this lorem ipsum means. I mean what language is it sef, Lorem ipsum dolor si amet lori i dont even understand.'/>
			</div>
		</div>
	)
}