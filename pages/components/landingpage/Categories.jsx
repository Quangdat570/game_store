import React from 'react'
import styles from '../../../styles/home.css/categori.module.css'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Link from 'next/link'

const Categories = ( {categories }) => {
    
  return (
   <>
   <Container fluid className={styles.background}>
    <div className="row">
        <div className="col-12">
        <div className={styles.title_featured}>FEATURED GAMES</div>
        <div className='container p-5'>
            <div className="row">
                <div className="col-12 ">
                    <div className={styles.layout}>
                        <div className="col-12 col-md-3 pt-3">
                            <img src="../../../img-home/slider1.jpg" alt="" className={styles.img_slider} />
                        </div>
                        <div className="col-12 col-md-3  pt-3">
                            <img src="../../../img-home/slider2.jpg" alt="" className={styles.img_slider}/>
                        </div>
                        <div className="col-12 col-md-3  pt-3">
                            <img src="../../../img-home/slider3.jpg" alt="" className={styles.img_slider}/>
                        </div>
                        <div className="col-12 col-md-3  pt-3">
                            <img src="../../../img-home/slider1.jpg" alt="" className={styles.img_slider}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
    </div>

   </Container>
   </>
  )
}

export default Categories