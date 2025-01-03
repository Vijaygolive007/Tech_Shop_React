import React from 'react'
import { useParams } from 'react-router';
import productsData from '../Data/productsData';

const Overview = () => {
    const { id }=useParams();
    const product = productsData.find((item) => item.id === parseInt(id)); 
    console.log(product)
  return (
    <>
     <b>The <b style={{color:"red"}}>{product.title}</b> {product.type} Truly {product.connectivity} {product.category} Provides with fabulous sound quality</b>
     <ul className='mt-3 mb-3'>
        <li>Sound Tuned to Perfection</li>
        <li>Comfortable to Wear</li>
        <li>Long Hours Playback Time</li>
     </ul>
     <p>Buy the <b>{product.title} {product.type} Truly {product.connectivity} {product.category}</b> Which offers you with fabulous music experience by providing you with awesome sound 
     quality that you can never move on from. Enjoy perfect flexibility and mobility with amazing musical quality with these Earbuds giving you a truly awesome audio experience. It blends with exceptional sound quality and a range of smart features for an unrivalled listening experience.</p>
    
    </>
  )
}

export default Overview 