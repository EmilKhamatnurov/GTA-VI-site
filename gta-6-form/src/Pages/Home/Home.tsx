import Input from '../../components/Input'
import styles from './Home.module.css'

function Home() {
	function logi(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		event.preventDefault()
		console.log('Привет')
	}
	return (
		<div className={styles.wrapper}>
			<form>
				<h1>GTA 6 - Оставь заявку</h1>
				<Input type='name' placeholder='Введите имя' />
				<Input type='email' placeholder='Введите почту' />
				{/* <button
					onClick={logi}
				>Хочу ГТА!</button> */}
			</form>
		</div>
	)
}

export default Home
