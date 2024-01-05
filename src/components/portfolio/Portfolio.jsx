import { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
	{
		id: 1,
		title: 'React Commerce',
		img: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, voluptas!',
	},
	{
		id: 2,
		title: 'Next.JS Blog',
		img: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, voluptas!',
	},
	{
		id: 3,
		title: 'Sneakers Blog React',
		img: 'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=600',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, voluptas!',
	},
	{
		id: 4,
		title: 'Fitnes App',
		img: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, voluptas!',
	},
]

const Single = ({ item }) => {
	const ref = useRef()

	const { scrollYProgress } = useScroll({ target: ref })

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

	return (
		<section>
			<div className='container'>
				<div className='wrapper'>
					<div className='imageContainer' ref={ref}>
						<img src={item.img} alt='' />
					</div>
					<motion.div className='textContainer' style={{ y }}>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						<button>Wyświetl projekt</button>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

const Portfolio = () => {
	const ref = useRef()

	const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] })

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	})

	return (
		<div className='portfolio' ref={ref}>
			<div className='progress'>
				<h1>Nasze prace</h1>
				<motion.div style={{ scaleX }} className='progressBar'></motion.div>
			</div>
			{items.map(item => (
				<Single item={item} key={item.id} />
			))}
		</div>
	)
}

export default Portfolio
