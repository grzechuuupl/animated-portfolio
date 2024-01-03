import React, { useRef, useState } from 'react'
import './contact.scss'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const variants = {
	initial: {
		y: 500,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1,
		},
	},
}

const Contact = () => {
	const formRef = useRef()
	const [error, setError] = useState(false)
	const [success, setSuccess] = useState(false)

	const sendEmail = e => {
		e.preventDefault()

		emailjs.sendForm('service_414ebzp', 'template_s3gkwsb', formRef.current, 'LSC8jOPK7DozdmGOz').then(
			result => {
				setSuccess(true)
			},
			error => {
				setError(true)
			}
		)
	}

	return (
		<motion.div className='contact' variants={variants} initial='initial' whileInView='animate'>
			<motion.div className='textContainer' variants={variants}>
				<motion.h1 variants={variants}>Pracuj z nami!</motion.h1>
				<motion.div className='item' variants={variants}>
					<h2>E-mail</h2>
					<span>hidestorecontact@gmail.com</span>
				</motion.div>
				<motion.div className='item' variants={variants}>
					<h2>Adres</h2>
					<span>ul.Hypowa 7, 47-747 Warszawa</span>
				</motion.div>
				<motion.div className='item' variants={variants}>
					<h2>Telefon</h2>
					<span>+48 747 474 747</span>
				</motion.div>
			</motion.div>
			<div className='formContainer'>
				<motion.div
					className='thunderSvg'
					initial={{ opacity: 1 }}
					whileInView={{ opacity: 0 }}
					transition={{ delay: 1, duration: 1 }}>
					<svg
						fill='#000000'
						height='550px'
						width='550px'
						version='1.1'
						id='Layer_1'
						xmlns='http://www.w3.org/2000/svg'
						xmlns:xlink='http://www.w3.org/1999/xlink'
						viewBox='0 0 512 512'
						xml:space='preserve'>
						<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
						<g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
						<g id='SVGRepo_iconCarrier'>
							{' '}
							<g>
								{' '}
								<g>
									{' '}
									<path d='M501.854,184.552c-2.578-8.853-11.839-13.94-20.697-11.364c-8.853,2.577-13.941,11.843-11.364,20.696 c5.85,20.099,8.816,40.998,8.816,62.117c0,122.746-99.862,222.609-222.609,222.609c-62.884,0-122.172-26.574-164.092-72.352 h32.882c9.22,0,16.696-7.475,16.696-16.696c0-9.22-7.475-16.584-16.696-16.584H58.007c-10.033,0-18.905,9.186-16.696,20.123 v63.244c0,9.22,7.475,16.696,16.696,16.696s16.473-7.475,16.473-16.696v-19.755C122.124,484.444,187.305,512,256,512 c141.158,0,256-114.842,256-256C512,231.721,508.586,207.683,501.854,184.552z'></path>{' '}
								</g>{' '}
							</g>{' '}
							<g>
								{' '}
								<g>
									{' '}
									<path d='M456.348,38.957c-9.22,0-16.696,7.475-16.696,16.696V77.82C391.81,28.482,325.852,0,256,0C114.842,0,0,114.842,0,256 c0,24.278,3.413,48.314,10.144,71.443c2.576,8.851,11.839,13.942,20.696,11.364c8.853-2.577,13.942-11.843,11.365-20.696 c-5.849-20.095-8.814-40.992-8.814-62.111c0-122.746,99.862-222.609,222.609-222.609c62.897,0,122.174,26.568,164.092,72.348 h-30.526c-9.22,0-16.696,7.475-16.696,16.696c0,9.22,7.475,16.696,16.696,16.696c12.023,0,59.834,0,66.783,0 c9.22,0,16.696-7.475,16.696-16.696V55.652C473.043,46.432,465.568,38.957,456.348,38.957z'></path>{' '}
								</g>{' '}
							</g>{' '}
							<g>
								{' '}
								<g>
									{' '}
									<path d='M372.978,205.915h-83.59V89.046c0-16.463-21.341-22.962-30.475-9.261L125.348,280.133 c-7.393,11.089,0.591,25.845,13.891,25.845h83.478v116.981c0,16.414,21.423,23.005,30.586,9.26l133.565-200.348 C394.261,220.782,386.277,205.915,372.978,205.915z M255.997,367.816v-78.423c0-9.22-7.364-16.696-16.584-16.696h-68.979v-0.001 l85.674-128.51v78.423c0,9.22,7.475,16.584,16.696,16.584h68.979L255.997,367.816z'></path>{' '}
								</g>{' '}
							</g>{' '}
						</g>
					</svg>
				</motion.div>
				<motion.form
					ref={formRef}
					onSubmit={sendEmail}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 2, duration: 1 }}>
					<input type='text' required placeholder='Imię' name='name' />
					<input type='email' required placeholder='E-mail' name='email' />
					<textarea rows={8} placeholder='Wiadomość' name='message' />
					<button>Wyślij</button>
					{error && 'Wysyłanie nie powiodło się'}
					{success && 'Wysłano'}
				</motion.form>
			</div>
		</motion.div>
	)
}

export default Contact
