import React from 'react'
import { useParams } from 'react-router'
import productsData from '../Data/productsData';
const Specifications = () => {
    const { id }=useParams();
    const product = productsData.find((item) => item.id === parseInt(id)); 
    console.log(product)
  return (
    <>
    <div  className='col-4 p-3'>
        <div className='d-flex  justify-content-between'>
            <p className='fw-bold'>Brand</p>
            <p className='fw-bold '>{product.brand}</p>
        </div>
        <div className='d-flex  justify-content-between'>
            <p className='fw-bold'>Model</p>
            <p className='fw-bold'>{product.title}</p>
        </div>
        <div className='d-flex  justify-content-between'>
            <p className='fw-bold'>Generic Name</p>
            <p className='fw-bold'>{product.category}</p>
        </div>
        <div className='d-flex  justify-content-between'>
            <p className='fw-bold'>Headphones Type</p>
            <p className='fw-bold'>{product.type}</p>
        </div>
        <div className='d-flex  justify-content-between'>
            <p className='fw-bold'>Connectivity</p>
            <p className='fw-bold'>{product.connectivity}</p>
        </div>
        <div className='d-flex  justify-content-between'>
            <p className='fw-bold'>Microphone</p>
            <p className='fw-bold'>Yes</p>
        </div>
    </div>
    </>
  )
}

export default Specifications