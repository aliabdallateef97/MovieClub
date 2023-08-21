import React from 'react'
import { getMovieTrailer } from '../../services'
import { useSelector } from 'react-redux'
import * as selectors from '@/core/config/import/selectors'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import { Stack } from '@mui/material'
import { TrailerContainer } from './style'
import { TrailerSkeleton } from '..'
import { MetaData } from '@/core/components'
import { FormattedMessage } from 'react-intl'


const index = () => {
    const {id} =useParams()
    const tv= useSelector(selectors.tv)
    const {data ,isLoading} =getMovieTrailer({id,tv})

    let trailer = data?.videos?.find((mov) => mov?.name === "Official Trailer");
    if (trailer === undefined ) {
      trailer =  data?.videos[0];
    }

  return (
    <Stack sx={{marginTop:'40px'}}>
      <h1>{<FormattedMessage id='movie.trailer'/>}</h1>
      <MetaData loading={isLoading} LoadingSkeleton={TrailerSkeleton}>
      <TrailerContainer>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${trailer?.key}`}  width='100%' height='100%' controls/>
      </TrailerContainer>
      </MetaData>
    </Stack>
  )
}

export default index
