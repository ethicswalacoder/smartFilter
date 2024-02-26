import { FormControlLabel, Checkbox } from "@mui/material";
import React from "react";
import  makeStyles  from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    '&$checked': {
      color: "#000",
    },
   '&.MuiCheckbox-root.Mui-checked': {
        color: "#000"
    },
  },
  checked: {},
  wrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft:0,
    paddingLeft: '1rem'
  },
  label:{
    fontSize: '.8rem',
    fontFamily: `'Raleway', sans-serif`,
  }
});

const CheckboxProton = ({ cuisine, changeChecked }) => {
  const classes = useStyles();

  const { checked, label, id } = cuisine;
  return (
    <div>
      <FormControlLabel
        classes={{
          label: classes.label,
          root: classes.wrap,
        }}
        control={
          <Checkbox
            classes={{
              checked: classes.checked,
              root: classes.root,
            }}
            size="small"
            checked={checked}
            onChange={() => changeChecked(id)}
            inputProps={{ 'aria-label': 'checkbox with small size' }}
          />
        }
        label={label}
      />
    </div>
  );
};

export default CheckboxProton;
