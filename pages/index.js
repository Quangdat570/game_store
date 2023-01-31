
import styles from '../styles/Home.module.css'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Link from 'next/link'
import { IoRocketOutline } from 'react-icons/io5'
import Carousel from 'react-bootstrap/Carousel';
import HeroBanner from './components/landingpage/HeroBanner';
import Trending from './components/landingpage/Trending';
import Creator from './components/landingpage/Creator';

import Categories from './components/landingpage/Categories';


export default function Home() {
  return (
    <>
    
    <HeroBanner/>
    <Trending/>
    <Creator/>
    <Categories />
    

    </>
  )
}

 

  




