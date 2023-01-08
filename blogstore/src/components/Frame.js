import React from 'react'
import { Link } from 'react-router-dom'

function Frame({item}) {
  return (
    <div className='framesContainer'>
        <Link to={`/view/${item.id}`}>
            <img src={item.cover} width="200" alt={item.title} />
            <div>{item.title}</div>
        </Link>
    </div>
  )
}

export default Frame