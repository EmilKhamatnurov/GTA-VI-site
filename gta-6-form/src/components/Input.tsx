interface InputProps {
	placeholder: string
	type: string
}

function Input({ placeholder, type }: InputProps) {
	return (
		<>
			<input type={type} placeholder={placeholder} />
		</>
	)
}

export default Input
