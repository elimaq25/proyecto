import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({item}) => {
   
  return (
    <>
    <div className='productos' >
    <Link to={`/item/${item.id}`}>
      
      
          <div className='producto'>
            <div>
              <img className='fotos' src={item.img}/>
            </div>
               <div className='producto__footer'>
                  <h5 className='title'>{item.title}</h5>
                  <p className='details'>{item.descpricion} ${item.precio}</p>
                  <p> id: {item.id}</p>
        
                </div>
       
            </div>
            </Link>
          </div>
       
    
    </>
  )
}

export default Item