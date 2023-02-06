import React from 'react'
import { Col, Container, Row, Button } from "react-bootstrap";
import styles from './Faq.module.css'
import { IoIosArrowForward, IoMdTime} from 'react-icons/io'

const index = () => {
  return (
    <>
        <Container fluid className={styles.bg_banner}>
           <div className={styles.breadcump}>
               <div className={styles.title_breadcump}>GAMES</div>
               <div className={styles.acb}>Cloux 
                 <span><IoIosArrowForward/></span> 
                <span className={styles.name_header}>Esport</span>
                </div>
             </div>
         </Container>

        <Container className='pt-5 pb-5'>
            <div className="row align-items-center">
                <div className="col-12 col-md-6">
                    <img src="../../products/esport.jpg" alt="" className={styles.img_esport} />
                </div>
                <div className="col-12 col-md-6 p-3">
                <div className={styles.text_center}>
                  <div className={styles.title}>About Cloux </div>
                  <div className={styles.sub_title}>eSport Team</div>
                </div>
                <div className={styles.content}>Chào mừng đến Mùa Giải 2023. Riot Brightmoon chia sẻ cập nhật về các trang phục và chủ đề, Riot Auberaun trò chuyện về những thay đổi của Xếp Hạng, và Riot Lexical sẽ hé lộ đôi chút về những tướng sẽ được ra mắt trong tương lai.</div>

                </div>
            </div>
        </Container>

        <Container fluid className={styles.background_esport}>
            <Container className={styles.absolut}>
            <div className="row align-items-center">
                <div className="col-12 col-md-6">
                    <img src="../../products/esport2.jpg" alt="" className={styles.img_esport} />
                </div>
                <div className="col-12 col-md-6 p-3">
                <div className={styles.title_vic}>Victories of  </div>
                <div className={styles.sub_title_vic}>Cloux</div>
                <div className={styles.content_vic}>Những người dẫn đầu của Đội Ngũ Summoner’s Rift - Riot Phroxzon và Riot Petrie chia sẻ về tình trạng của Liên Minh Huyền Thoại, kế hoạch cho các vị trí và mục tiêu cho Mùa Giải 2023.</div>

                </div>
                <div className="col-12 d-md-flex flex-wrap">
                    <div className="col-12 col-md-4 pt-4">
                        <div className='d-flex align-items-center'>
                            <div className={styles.number_esport}>1st</div>
                            <div className={styles.name_esport}>Gloria Xtra 2017 League</div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 pt-4">
                        <div className='d-flex align-items-center'>
                            <div className={styles.number_esport}>1st</div>
                            <div className={styles.name_esport}>FIFA 2018 Super League</div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 pt-4">
                        <div className='d-flex align-items-center'>
                            <div className={styles.number_esport}>2st</div>
                            <div className={styles.name_esport}>CS: GO Perfect Super Cup</div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 pt-4  d-none d-md-block">
                        <div className='d-flex align-items-center'>
                            <div className={styles.number_esport}>1st</div>
                            <div className={styles.name_esport}>LOL 2018 Super League</div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 pt-4  d-none d-md-block">
                        <div className='d-flex align-items-center'>
                            <div className={styles.number_esport}>1st</div>
                            <div className={styles.name_esport}>FIFA 2018 Pro Winter Cup</div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 pt-4 d-none d-md-block">
                        <div className='d-flex align-items-center'>
                            <div className={styles.number_esport}>3st</div>
                            <div className={styles.name_esport}>Left 4 Dead 2 Several Cup</div>
                        </div>
                    </div>
                </div>
            </div>
            </Container>

        </Container>

        <Container>
        <div className="row d-flex">
		<div className={styles.content_img}>
			<div className="col-md-4 ps-3 pe-3">
				<div className={styles.item}>
					<img src="../../products/esport3.jpg"/>
					
				</div>
			</div>
			<div className="col-md-4 ps-3 pe-3">
				<div className={styles.item}>
					<img src="../../products/esport4.jpg"/>
					
				</div>
			</div>
			<div className="col-md-4 ps-3 pe-3">
				<div className={styles.item}>
					<img src="../../products/esport5.jpg"/>
					
				</div>
			</div>
		</div>
        </div>
        </Container>

    </>
  )
}

export default index