import React from 'react'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'

import  makeStyles  from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    width: '100%',
    justifyContent: 'space-between',
  },
  toggle: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: '.8rem',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '10px',
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)': {
      borderRadius: '10px',
    },
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
      borderRadius: '10px',
      border: '1px solid rgba(0, 0, 0, 0.12)',
    },
    '&.MuiToggleButton-root.Mui-selected': {
      color: '#fff',
      backgroundColor: '#000',
    },
    '&.MuiToggleButton-root': {
      '&:hover': {
        background: '#000',
        color: '#fff',
      },
    },
  },
});

const FilterCategories = ({options, value,selectToggle}) => {

    const classes = useStyles();
  return (
    <ToggleButtonGroup value={value} onChange={selectToggle} className={classes.root} exclusive>
      

      {options.map(({label, id, value})=> (
        <ToggleButton className={classes.toggle} key={id} value={value}>
            {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

export default FilterCategories
