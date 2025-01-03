import servicesData from '../Data/serviceData'
import './Ouradvantages.css'

const Ouradvantages = () => {
  return (<>
    <h2 className='text-center mt-4 p-5'>Our Advantages</h2>
    <div className='container d-flex justify-content-around mt-3 mb-5'>
        {servicesData.map((e)=>(
          <div className='d-flex' key={e.id}>
            <div className='fs-1 px-1'>{e.icon}</div>
            <div>
              <p className='m-1 mt-2'>{e.title}</p>
              <span>{e.info}</span>
            </div>
          </div>
        ))

        }
        
    </div>
    </>
  )
}

export default Ouradvantages