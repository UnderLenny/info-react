import Link from 'next/link'
import styles from './phone.module.css'

const Phone = () => {
	return (
		<section className={styles.phone}>
			<Link className={styles.phone_link} href='tel:+79031234567'>
				+7 (903) 123-45-67
			</Link>
			<h2 className={styles.phone_link_text}>Whatsapp</h2>
		</section>
	)
}

export default Phone
