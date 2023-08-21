import { Stack ,styled } from "@mui/material";

export const SwitchButton =styled(Stack)(({theme})=>({
    margin:'20px 0',
    backgroundColor: '#523e3e',
    padding:' 5px 20px',
    width: '200px',
    height:'40px',
    borderRadius: '50px',
    color: 'white',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection:'row',
    position: 'relative',
    cursor: 'pointer',
    alignItems:'center',
    '& .switcher':{
        position: 'absolute',
        width: '100px',
        height: '100%',
        backgroundColor: 'rgb(230, 224, 224)',
        top: '0',
        left: '0',
        borderRadius: '50px',
        transition: '0.5s',
        '&.clicked':{
            left: '50%',
        }
    }
}))

