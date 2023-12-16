import './app.scss'
import Navbar from './components/Navbar/Navbar'

const App = () => {
	return (
		<div>
			<section id='Strona Główna'>
				<Navbar />
			</section>
			<section>Parallax</section>
			<section id='Usługi'>Usługi</section>
			<section>Parallax</section>
			<section id='Portfolio'>Portfolio1</section>
			<section>Portfolio2</section>
			<section id='Kontakt'>Contact</section>
		</div>
	)
}

export default App

