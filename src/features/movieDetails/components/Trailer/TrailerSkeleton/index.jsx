import { Skeleton } from "@mui/material";
import { TrailerContainer } from "../style";



const index = () => {
  return (
    <TrailerContainer>
      <Skeleton variant="rectangular" width='100%' height='100%' animation="wave"/>
    </TrailerContainer>
  )
}

export default index
