import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Ouradvantages from '../components/Ouradvantages'
import ImageCarousel from '../components/ImageCarousel'
import Products from '../components/Products'
import ScrollToTop from '../components/ScrollToTop'


const Home = () => {
  return (
    <>
    <Header/>
    <Carousel/>
    <ImageCarousel/>
    <Products/>
    <Ouradvantages/>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

export default Home