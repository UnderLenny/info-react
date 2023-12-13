import Link from 'next/link'
import styles from './rules.module.css'

const Rules = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.rules}>
				<div className={styles.rules_block}>
					<Link href={''}>
						<h3 className={styles.rules_text}>
							Правила <br />
							бронирования
						</h3>
					</Link>
				</div>
				<div className={styles.rules_block}>
					<Link href={'/'}>
						<h3 className={styles.rules_text}>
							Правила <br />
							проживания
						</h3>
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Rules
