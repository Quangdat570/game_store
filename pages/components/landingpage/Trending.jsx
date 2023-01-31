import React from 'react'
import styles from '../../../styles/Home.module.css'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Link from 'next/link'
import { IoRocketOutline } from 'react-icons/io5'
import Carousel from 'react-bootstrap/Carousel';

const Trending = () => {
  return (
    <Container fluid className={styles.background}>
    <div className='container pt-5 pb-5'>
      <div className='row'>
        <div className='col-12 '>
            <h3 className={styles.heading_trend}>Top Sales</h3>
            
        </div>
        <div className='col-12 col-md-6 p-2'>
          <img src="../../../img-home/topsale.jpg" alt="" className='w-100 h-100' />
          
        </div>
        <div className='col-12 col-md-6 d-flex flex-wrap'>
          <div className='col-12 col-md-6 '>
            <div className='m-2 position-relative'>
              <img src="../../../img-home/topsale1.jpg" alt="" className='w-100' />
              <div className='m-2'>
                <div className={styles.price_sale}>
                <div className={styles.name_sale}>Fan Cry</div>
                  <div className='d-flex '>
                    <div className={styles.name}>-67%</div>
                    <div className={styles.price_vnd}>
                      <div>-67%</div>
                      <div>326,000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-6 '>
            <div className='m-2 position-relative'>
              <img src="../../../img-home/topsale1.jpg" alt="" className='w-100' />
              <div className='m-2'>
                <div className={styles.price_sale}>
                <div className={styles.name_sale}>Fan Cry</div>
                  <div className='d-flex '>
                    <div className={styles.name}>-67%</div>
                    <div className={styles.price_vnd}>
                      <div>-67%</div>
                      <div>326,000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-6 '>
            <div className='m-2 position-relative'>
              <img src="../../../img-home/topsale1.jpg" alt="" className='w-100' />
              <div className='m-2'>
                <div className={styles.price_sale}>
                <div className={styles.name_sale}>Fan Cry</div>
                  <div className='d-flex '>
                    <div className={styles.name}>-67%</div>
                    <div className={styles.price_vnd}>
                      <div>-67%</div>
                      <div>326,000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-6 '>
            <div className='m-2 position-relative'>
              <img src="../../../img-home/topsale1.jpg" alt="" className='w-100' />
              <div className='m-2'>
                <div className={styles.price_sale}>
                <div className={styles.name_sale}>Fan Cry</div>
                  <div className='d-flex '>
                    <div className={styles.name}>-67%</div>
                    <div className={styles.price_vnd}>
                      <div>-67%</div>
                      <div>326,000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          

        </div>
      </div>

    </div>

  </Container>
  )
}

export default Trending