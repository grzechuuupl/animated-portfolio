import './services.scss'
import { motion } from 'framer-motion'

const variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
}

const Services = () => {
	return (
		<motion.div className='services' variants={variants} initial='initial' whileInView='animate'>
			<motion.div className='textContainer' variants={variants} >
				<p>
					Hide.-z nami odkryjesz nową stronę świata <br /> i rozwoju
				</p>
				<hr />
			</motion.div>
			<motion.div className='titleContainer' variants={variants} >
				<div className='title'>
					<img src='/people.webp' alt='' />
					<h1>
						<b>Unikalne</b> Rozwiązania
					</h1>
				</div>
				<div className='title'>
					<h1>
						<b>Dla Twojego</b> Biznesu .
					</h1>
					<button>Co Robimy?</button>
				</div>
			</motion.div>
			<motion.div className='listContainer' variants={variants} >
				<motion.div className='box' whileHover={{ background: 'gray', color: 'white' }}>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magni minus facere omnis unde asperiores
						blanditiis nemo nam magnam iusto.
					</p>
					<button>Idź</button>
				</motion.div>
				<motion.div className='box' whileHover={{ background: 'gray', color: 'white' }}>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorum quia nulla, corrupti optio
						tenetur reiciendis fugiat in voluptate eligendi!
					</p>
					<button>Idź</button>
				</motion.div>
				<motion.div className='box' whileHover={{ background: 'gray', color: 'white' }}>
					<h2>Branding</h2>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto facere eaque, deserunt quibusdam repellendus
						mollitia accusantium rem nesciunt cumque similique.
					</p>
					<button>Idź</button>
				</motion.div>
				<motion.div className='box' whileHover={{ background: 'gray', color: 'white' }}>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non, dolorum dolores tempore laborum iusto
						placeat maiores blanditiis ipsum dolor?
					</p>
					<button>Idź</button>
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

export default Services
