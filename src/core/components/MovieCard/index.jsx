import React from 'react'
import { Card, MovieTitle, Rate } from './style'

const index = ({rate,title,img,onClick}) => {

  return (
    <Card onClick={onClick}>
        <Rate>{rate?.toFixed(1)}</Rate>
      <img src={img} className='imgCard'/>
      <MovieTitle variant='h5'>{title}</MovieTitle>
    </Card>
  )
}

export default index
