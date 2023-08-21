import { SwitchButton } from './style';
import { useDispatch } from 'react-redux';
import * as actions from '@/core/config/import/actions'
import * as selectors from '@/core/config/import/selectors'
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Typography } from '@mui/material';

const index = () => {
const dispatch =useDispatch()
const tv=useSelector(selectors.tv)

const changeTypeHandler=()=>{
    dispatch(actions.setTv())
}

const switchClass = [`switcher ${tv ? 'clicked' : ''}`];


  return (
        <SwitchButton onClick={changeTypeHandler}>
          <div className={switchClass}></div>
          <Typography variant='h5'>{<FormattedMessage id='movie.series'/>}</Typography>
          <Typography variant='h5'>{<FormattedMessage id='movie.movies'/>}</Typography>
        </SwitchButton>
  )
}

export default index
