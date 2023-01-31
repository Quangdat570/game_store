import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './HeroProduct.module.css'
import { IoIosArrowForward } from 'react-icons/io'

const HeroProducts = () => {
  return (
    <>
    <Container fluid className={styles.bg_banner}>
        <div className={styles.breadcump}>
          <div className={styles.title_breadcump}>GAMES</div>
          <div className={styles.acb}>Cloux 
            <span><IoIosArrowForward/></span> 
           <span className={styles.name}>Games</span>
           </div>
        </div>
    </Container>
    
    </>
  )
}

export default HeroProducts