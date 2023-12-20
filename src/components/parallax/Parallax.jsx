import './parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Parallax = ({ type }) => {
	const ref = useRef()

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})

	const yText = useTransform(scrollYProgress, [0, 1], ['0%', '300%'])
	const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

	return (
		<div
			className='parallax'
			ref={ref}
			style={{
				background:
					type === 'services'
						? 'linear-gradient(180deg, lightgrey, #211f1f)'
						: 'linear-gradient(180deg, #211f1f, lightgrey )',
			}}>
			<motion.h1 style={{ y: yText }}>{type === 'services' ? 'Co robimy?' : 'Co zrobiliśmy?'}</motion.h1>
			<motion.div className='mountains'></motion.div>
			<motion.div
				className='planets'
				style={{ y: yBg, backgroundImage: `url(${type === 'services' ? '/planets.png' : '/sun.png'})` }}></motion.div>
			<motion.div className='stars' style={{ x: yBg }}></motion.div>
		</div>
	)
}

export default Parallax
