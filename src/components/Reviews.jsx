import React from 'react'
import reviewData from '../Data/reviewData.jsx'
import { FaRegCircleUser } from 'react-icons/fa6'
import { FaStar } from 'react-icons/fa'
const Reviews = () => {
    console.log(reviewData)


    const renderStars = (rateCount) => {
          return [...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              color={index < rateCount ? 'red' : 'gray'}
              className="me-2"
            />
          ));
        };
  return (
    <>
    {reviewData.map((rev)=>(<div key={rev.id} className='mb-4'>
        <div className='d-flex ms-3' >
            <FaRegCircleUser className='fs-3 mt-2 me-3' style={{color:'white'}}/>
            <div className='p-0 m-0' style={{color:'white'}}>
                <p className='p-0 m-0' style={{color:'white'}}>{rev.name}</p>
                <div className='p-0 m-0' style={{color:'white'}} >{renderStars(rev.rateCount)}| {rev.date}</div>
            </div>
        </div>
        <span className='ps-3'>{rev.review}</span>
        </div>
    ))}
    </>
  )
}

export default Reviews