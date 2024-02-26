import React from 'react'
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
// import  makeStyles  from "@mui/styles/makeStyles";

// const useStyles = makeStyles({
//     root: {
//         width:'100%',
//     },
//     thumb: {
//         color:'#000',
//     },
//     rail:{
//         color: '#000',
//     },
//     track: {
//         color:'#000',
//     }
// });


const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    width: '90%',
    marginLeft: '0.5rem',
    '& .MuiSlider-track': {
      border: 'none',
      
    },
    '& .MuiSlider-thumb': {
      height: 25,
      width: 25,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&::before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#52af77',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&::before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });

const SliderProton = ({value, changedPrice}) => {
   
    // const classes = useStyles();
  return (
    <div >
       <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        value={value}
        onChange={changedPrice}
        min={1000}
        max={5000}
        // classes={
        //     {
        //         thumb:classes.thumb,
        //         rail:classes.rail,
        //         track: classes.track,
        //     }
        // }
      />
    </div>
  )
}

export default SliderProton
