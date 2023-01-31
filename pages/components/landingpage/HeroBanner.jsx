import React from 'react'
import styles from '../../../styles/Home.module.css'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Link from 'next/link'
import { IoRocketOutline } from 'react-icons/io5'
import Carousel from 'react-bootstrap/Carousel';

const HeroBanner = () => {
  return (
    <Container className={styles.background1} fluid>
      <div className={styles.inner}>
        <div className={styles.title}>Gloria Soccer 2018</div>
        <div className={styles.excerpt}>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</div>

      </div>
    </Container>
  )
}

export default HeroBanner