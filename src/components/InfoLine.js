import React from 'react'
import './InfoLine.css'

const InfoLine = ({user, openProfile}) => {
  return (
    <div>
      <div className='info-line'>
        <div className='info-line_element'>
          <img src={user.avatar} alt="John" style={{ width: '50px' }} />
        </div>
        <div className='info-line_element'>
          <h3>{`${user.first_name} ${user.last_name}`}</h3>
        </div>
        <div className='info-line_element'>
          <p className="title">{user.username}</p>
        </div>
        <div className='info-line_element'>
          <button onClick={()=> openProfile(user)}>View Profile</button>
        </div>
      </div>
    </div>
  )
}

export default InfoLine