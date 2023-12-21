import './hero.scss'
import { motion } from 'framer-motion'

const textVarinats = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
	scrollButton: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
}
const sliderVarinats = {
	initial: {
		x: 0,
	},
	animate: {
		x: '-220%',

		transition: {
			repeat: Infinity,
			repeatType: 'mirror',
			duration: 20,
		},
	},
}

const Hero = () => {
	return (
		<div className='hero'>
			<div className='wrapper'>
				<motion.div className='textContainer' variants={textVarinats} initial='initial' animate='animate'>
					<motion.h2 variants={textVarinats}>GRZEGORZ MRÓWKA</motion.h2>
					<motion.h1 variants={textVarinats}>Web Developer and UI designer</motion.h1>
					<motion.div className='buttons' variants={textVarinats}>
						<motion.button variants={textVarinats}>See the Latest Works</motion.button>
						<motion.button variants={textVarinats}>Contact Me</motion.button>
					</motion.div>
					<motion.img src='/scroll.png' alt='' variants={textVarinats} animate='scrollButton' />
				</motion.div>
			</div>
			<motion.div className='slidingTextContainer' variants={sliderVarinats} initial='initial' animate='animate'>
				{' '}
				Writer Content Creator Influencer
			</motion.div>
			<div className='imageContainer'>
				<img src='/hero-grzegorz.jpeg' alt='' />
			</div>
		</div>
	)
}

export default Hero
