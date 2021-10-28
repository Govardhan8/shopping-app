const Searchbar = ({ suggestions }) => {
	return (
		<>
			<label for='product'>
				<input
					list='products'
					name='product'
					id='product'
					placeholder='search here'
				/>

				<datalist id='products'>
					{suggestions &&
						suggestions.map((suggestion) => (
							<option
								key={suggestions.indexOf(suggestion)}
								value={suggestion}
							/>
						))}
				</datalist>
			</label>
		</>
	)
}

export default Searchbar
