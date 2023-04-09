import React from 'react';

const Card = ({ birinci, ikinci }) => {
  return (
    <div className='carddiv'>
      <div className='cardsumbuldiv'>
        <img className='cardsumbul' src={ birinci }/>
      </div>
      <div className='cardtorpaqdiv'>
        <img className='cardtorpaq' src={ ikinci }/>
      </div>
    </div>
  )
}

export default Card

