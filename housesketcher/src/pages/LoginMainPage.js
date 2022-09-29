import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import MainCarousel from '../components/LoginMainPage/MainCarousel'
import SubCarousel from '../components/LoginMainPage/SubCarousel'
import Footer from '../components/Footer/Footer';
import styles from './LoginMainPage.module.css'


// import styles from './LoginMainPage.module.css'

function LoginMainPage(props) {	
	return (
		<div className={styles.LoginMainPage}>
			<Navbar />
			<MainCarousel />
			<SubCarousel />
			<br />
			<br />
			<br />
			<br />					
			<Footer />
		</div>
	);
}

export default LoginMainPage;