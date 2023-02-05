
import styles from '../styles/Home.module.css'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Link from 'next/link'
import { IoRocketOutline } from 'react-icons/io5'
import Carousel from 'react-bootstrap/Carousel';
import HeroBanner from './components/landingpage/HeroBanner';


import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


export default function Home({games, products,feature, sale}) {
  return (
    <>
    
    <HeroBanner/>
    


    <Container fluid className={styles.background}>
    <div className='container pt-5 pb-5'>
      <div className='row'>
        <div className='col-12 '>
            <h3 className={styles.heading_trend}>Top Sales</h3>
            
        </div>
        <div className='col-12 col-md-6 p-2'>
          {games.map((products) => (

          <Link href={{
            pathname:'/products/[gid]',
            query: {gid: products.id}
          }} key={products.id}><img src={products.image} alt="" className='w-100 h-100' /></Link>
          ))}
          
        </div>
        <div className='col-12 col-md-6 d-flex flex-wrap'>
          {sale.map((item) => (
          
            <div className='col-12 col-md-6 '>
              <Link href={{
                pathname:'/products/[gid]',
                query: {gid: item.id }
              }} key={item.id}>
                <div className='m-2 position-relative'>
                  <img src={item.image} alt="" className='w-100' />
                  <div className='m-2'>
                    <div className={styles.price_sale}>
                    <div className={styles.name_sale}>{item.name}</div>
                      <div className='d-flex '>
                        <div className={styles.name}>-{item.sale}%</div>
                        <div className={styles.price_vnd}>
                          <div className={styles.price_save}>{item.price}</div>
                          <div>₫ {item.price_sale}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          

          ))}

        

          

          

        </div>
      </div>

    </div>

  </Container>

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
        {products.map((item) => (

       
          <SwiperSlide>
            <div className=' position-relative' key={item.id}>
            <Link href={{
                  pathname: '/products/[gid]',
                  query: {gid: item.id}
                }}>
                  <img src={item.image} alt=""  />
                  <div className=''>
                    <div className={styles.price_sale}>
                    <div className={styles.name_sale}>{item.name}</div>
                      <div className='d-flex '>
                        <div className={styles.name}>-{item.sale}%</div>
                        <div className={styles.price_vnd}>
                          <div className={styles.price_save}>{item.price}</div>
                          <div>₫ {item.price_sale}</div>
                        </div>
                      </div>
                    </div>
                  </div>
        </Link>
            </div>
          </SwiperSlide>
        ))}
       
      
      </Swiper>
    </Container>

    <Container fluid className={styles.background}>
    <div className="row">
        <div className="col-12">
        <div className={styles.title_featured}>FEATURED GAMES</div>
        <div className='container p-5'>
            <div className="row">
                <div className="col-12 ">
                    <div className={styles.layout}>
                        {feature.map((item) => (
                        <div className="col-12 col-md-3 pt-3" key={item.id}>
                            <Link
                            href={{
                                pathname: '/products/[gid]',
                                query: {gid: item.id}                                
                            }}><img src={item.image} alt="" className={styles.img_slider} /></Link>
                        </div>

                        ))}
                        {/* <div className="col-12 col-md-3  pt-3">
                            <img src="../../../img-home/slider2.jpg" alt="" className={styles.img_slider}/>
                        </div> */}
                        {/* <div className="col-12 col-md-3  pt-3">
                            <img src="../../../img-home/slider3.jpg" alt="" className={styles.img_slider}/>
                        </div> */}
                        {/* <div className="col-12 col-md-3  pt-3">
                            <img src="../../../img-home/slider1.jpg" alt="" className={styles.img_slider}/>
                        </div> */}
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

export const getStaticProps = async (ctx) => {
 

  const res = await fetch("https://63d729ad5dbd723244211e09.mockapi.io/sale");
  
  const resPon = await fetch("https://63d729ad5dbd723244211e09.mockapi.io/products")
  const resData = await resPon.json();

  const data = await res.json();


  return {
    props: {
      games: resData.slice(20),
      products: resData,
      feature: resData.slice(13,17),
      sale: resData.slice(8,12),
    },
    
  };
  
};
 

  



