import React from 'react'
import './Foooter.css'
import { footMenu, footSocial } from '../Data/footerMenu'
import { Link } from 'react-router'
const Footer = () => {
  return (
    <footer >
    <div className="container d-flex  p-1 mt-3">
    <div className='p-3 col-3'>
        <h1>TECH-SHOP</h1>
        <p>
            Subscribe to our Email alerts to receive<br/>
            early discount offers, and new products info.
        </p>
        <input type="text" placeholder='Email Address*' className='p-2 mb-2 bg-dark text-white w-100'/>
        <button className='sub-button'>Subscribe</button>
    </div>
    <div className='container d-flex justify-content-around'>
        {footMenu.map((e)=>(
            <div className='p-2' key={e.id}>
            <h4 className='ms-3'>{e.title}</h4>
            <ul className='footer-list-container' >
            {e.menu.map((item)=>(
                 <li key={item.id} className="list-item">
                 <Link to={item.path} className='link-list-item'>{item.link}</Link>
               </li>
            ))}
            </ul>           
    </div>))}
    </div>

    </div>
    <div className='container d-flex justify-content-between'>
        <p>2024| All Rights Reserved. Build By| VIJAY SAI GOLIVE</p>
        <div className='d-flex'>
        {footSocial.map((i)=>(
            <>
            <div className='ms-4 fs-4' key={i.id}>
            <Link to={i.path} >{i.icon}</Link>
            </div>
            
            </>
        ))}
        </div>
       
    </div>
    </footer>
  )
}

export default Footer