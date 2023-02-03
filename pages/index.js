
import styles from '../styles/Home.module.css'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Link from 'next/link'
import { IoRocketOutline } from 'react-icons/io5'
import Carousel from 'react-bootstrap/Carousel';
import HeroBanner from './components/landingpage/HeroBanner';
import Trending from './components/landingpage/Trending';
import Creator from './components/landingpage/Creator';

import Categories from './components/landingpage/Categories';


export default function Home({games, products,feature, sale}) {
  return (
    <>
    
    <HeroBanner/>
    <Trending sale={sale} games={games}/>
    <Creator products={products}/>
    <Categories feature={feature} />
    

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
 

  




