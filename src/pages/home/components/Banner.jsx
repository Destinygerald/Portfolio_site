import '../style.css'
import '../style.mobile.css'
import { FaXTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import { useEffect } from 'react'
import file from  "../../../assets/My Resume.pdf"

function BannerMain () {

	

	return (
	<div className='banner-main'>
		<div className='banner-main-top'>
			<div className='banner-main-top-left'>
				<span>Hi, I'm Destiny</span>
				<div>- Frontend Developer</div>
			</div>

			<div className='banner-main-top-right'>
				****
			</div>
		</div>

		<div className='banner-main-btm'>
			<div>
				<div> geralddestiny7@gmail.com </div>
				<div> +234 902 220 1263 </div>

				<div>
					<span> <FaXTwitter /> </span>
					<span> <FaWhatsapp /> </span>
					<span> <FaLinkedinIn /> </span>
				</div>
			</div>

			<div className='banner-main-btm-cnt'>
				<div>Hello! I'm Destiny Effiong, a passionate and innovative Frontend Developer dedicated to crafting exceptional digital solutions. I'm driven by a relentless curiosity and passion for learning, constantly seeking new challanges and opportunity to grow. </div>
				
				<a href={file} download="Destiny's Resume" target="_blank">
					<button>Hire me</button>
				</a>
			</div>
		</div>
	</div>
	)
}

export function Banner () {

	// useEffect(() => {
	// 	const carousel_inner = document.querySelector('.banner-carousel-inner')

	// 	let carousel_array = Array.from(carousel_inner.children)

	// 	carousel_array.forEach(item => {
	// 		const duplicatedItem = item.cloneNode(true)
	// 		duplicatedItem.setAttribute('aria-hidden', true)
	// 		carousel_inner.appendChild(duplicatedItem)
	// 	})

	// }, [])

	return (
		<div className='banner'>
			<BannerMain />

			<div className='banner-carousel'>
				<div className='banner-carousel-inner'>
					{/*<div>
						<img src={img1} />
					</div>

					<div>
						<img src={img2} />
					</div>
					
					<div>
						<img src={img3} />
					</div>

					<div>
						<img src={img4} />
					</div>*/}
				</div>
			</div>
		</div>
	)
}