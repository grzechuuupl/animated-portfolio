import './app.scss'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'

const App = () => {
	return (
		<div>
			<section id='Strona Główna'>
				<Navbar />
				<Hero />
			</section>
			<section id='Usługi'>
				<Parallax type='services' />
			</section>
			<section>
				<Services />
			</section>
			<section id='Portfolio'>
				<Parallax type='portfolio' />
			</section>
			
			<section id='Kontakt'>
				<Contact />
			</section>
		</div>
	)
}

export default App
