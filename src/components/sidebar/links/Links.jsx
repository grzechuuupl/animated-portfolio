const variants={
    
}

const Links = () => {
	const items = ['Strona Główna', 'Usługi', 'Portfolio', 'Kontakt', 'O nas']
	return (
		<div className='links'>
			{items.map(item => (
				<a href={`#${item}`} key={item}>
					{item}
				</a>
			))}
		</div>
	)
}

export default Links
