import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

export default function Home() {
	const handleOnBannerBtnClick = (e) => {
		e.preventDefault();
		console.log("Button Clicked!");
	};
	return (
		<div className={styles.container}>
			<Head>
				<title>Coffe Connoisseur</title>
				<meta name="description" content="Next JS Udemy tutorial" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Banner
					buttonText="View stores nearby"
					handleOnClick={handleOnBannerBtnClick}
				/>
				<div className={styles.heroImage}>
					<Image
						src="/static/hero-image.png"
						width={700}
						height={400}
						alt="hero"
					/>
				</div>
				<Card name="Dark Horse Coffe" imgUrl="/static/hero-image.png" href="/coffee-store/dark-horse-coffee" />
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
}
