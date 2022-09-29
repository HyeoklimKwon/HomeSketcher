import React from 'react';
import styles from './MainCard.module.css'
import image1 from '../../assets/2.jpg'
import image2 from '../../assets/taste.gif'

function MainCarousel(props) {
  return (
    <>
      <section className={styles.Category}>
        <div className={styles.main_card}>
          <img className={styles.left} src="https://cdn.electimes.com/news/photo/202201/227731_144732.jpg" alt="" />
          <div className={styles.right}>
            <h2>Plan Your Room Design</h2>
            <br />
            <p className={styles.content}>
            <br/>Using the HomeSketcher App
            <br/> you can create your room design on your computer
            </p>
            <br />
            <br />
          </div>
        </div>
        <hr />
        <div className={styles.main_card}>
          <div className={styles.second_text}>
            <h2>Pick your Taste</h2>
            <br />
            <p className={styles.content}>
            <br/>HomeSketcher identifies your taste and
            <br/>recommends the best furniture
            <br/>Decorate your home with recommended furniture
            </p>
            <br />
            <br />
            <br />
          </div>
          <img className={styles.second_img} src={image2} alt="" />
        </div>
        <hr />
        <div className={styles.main_card}>
          <img className={styles.left} src={image1} alt="" />
          <div className={styles.right}>
            <h2>Bring Your Ideas Into 3D</h2>
            <br />
            <p className={styles.content}>
            <br/>Pick your furnitures and put
            <br/>we build the 3D rooms for you
            <br/>even with complex building structures
            </p>
            <br />
            <br />
            <br />
          </div>
        </div>
        <hr />
      </section>
    </>
  );
}

export default MainCarousel;