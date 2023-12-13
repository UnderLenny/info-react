import Image from 'next/image'
import Link from 'next/link'
import styles from './houses.module.css'

const Houses = () => {
	return (
		<section className={styles.section}>
			<div className={styles.section_position}></div>
			<Link href='/house/1' className={styles.link}>
				<Image
					className={styles.img}
					src='/house.jpg'
					alt='Mountain'
					width={350}
					height={200}
				/>
				<div className={styles.title_block}>
					<h1 className={styles.title}>Дом 1</h1>
					<p className={styles.section_text}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
			</Link>
			<Link href='/house/1' className={styles.link}>
				<Image
					className={styles.img}
					src='/house.jpg'
					alt='Mountain'
					width={350}
					height={200}
				/>
				<div className={styles.title_block}>
					<h1 className={styles.title}>Дом 2</h1>
					<p className={styles.section_text}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
			</Link>
			<Link href='/house/1' className={styles.link}>
				<Image
					className={styles.img}
					src='/house.jpg'
					alt='Mountain'
					width={350}
					height={200}
				/>
				<div className={styles.title_block}>
					<h1 className={styles.title}>Дом 3</h1>
					<p className={styles.section_text}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
			</Link>
		</section>
	)
}

export default Houses
