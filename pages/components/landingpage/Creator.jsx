
import styles from '../../../styles/Home.module.css'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Link from 'next/link'
import { IoRocketOutline } from 'react-icons/io5'
import Carousel from 'react-bootstrap/Carousel';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";




// import required modules


const Creator = () => {
    
  return (
    <>
    <Container fluid className={styles.background}>
      <div className={styles.title_trending}>New and trending</div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
      
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      
        className="mySwiper pb-5"
      >
        <SwiperSlide>
          <div className=' position-relative'>
                <img src="../../../img-home/slider1.jpg" alt=""  />
                <div className=''>
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
        </SwiperSlide>
        <SwiperSlide>
        <div className=' position-relative'>
                <img src="../../../img-home/slider1.jpg" alt=""  />
                <div className=''>
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
        </SwiperSlide>
        <SwiperSlide>
        <div className=' position-relative'>
                <img src="../../../img-home/slider2.jpg" alt=""  />
                <div className=''>
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
        </SwiperSlide>
        <SwiperSlide> <div className=' position-relative'>
                <img src="../../../img-home/slider3.jpg" alt=""  />
                <div className=''>
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
          </SwiperSlide>
        <SwiperSlide> <div className=' position-relative'>
                <img src="../../../img-home/slider2.jpg" alt=""  />
                <div className=''>
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
          </SwiperSlide>
        <SwiperSlide>
        <div className=' position-relative'>
                <img src="../../../img-home/slider1.jpg" alt=""  />
                <div className=''>
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
        </SwiperSlide>
      
      </Swiper>
    </Container>

  </>
  )
}

export default Creator



