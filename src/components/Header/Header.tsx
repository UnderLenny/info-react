import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<Link href='/' className={styles.link}>
				<h1 className={styles.title}>Шерегеш</h1>
				<Image
					className={styles.img}
					src='/head.png'
					alt='Mountain'
					width={400}
					height={400}
				/>
				<h1 className={styles.title}>Панорама</h1>
				<p className={styles.header_text}>Гостевой комплекс</p>
			</Link>
		</header>
	)
}

export default Header
