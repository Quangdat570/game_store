import React from 'react'
import styles from './Footer.module.css'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Link from 'next/link'
import { SiDiscord } from 'react-icons/si'
import { AiOutlineYoutube } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'
import { FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <Container fluid className={styles.background}>
        <div className="container">
           <div className={styles.footer}>
               <div>
                <img src="../../../img-home/logo_footer.jpg" alt=""  className='w-75'/>
               </div>
               <div className={styles.content_footer}>
                   <div className={styles.text_footer}>© 2023 Valve Corporation.  All rights reserved.  All trademarks are property of their respective owners in the US and other countries.</div>
                   <div className={styles.text_footer}>VAT included in all prices where applicable.
                    <span className={styles.more}>  Privacy Policy <span className='p-1'>|</span></span> 
                    <span className={styles.more}>Legal <span className='p-1'>|</span></span> 
                    <span className={styles.more}>Steam Subscriber Agreement <span className='p-1'>|</span></span>
                    <span className={styles.more}>Refunds <span className='p-1'>|</span></span>
                    <span className={styles.more}>Cookies</span>
                    </div>
               </div>
           </div>
        </div>

    </Container>
  )
}

export default Footer