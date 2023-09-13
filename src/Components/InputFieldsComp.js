import { TextField, Typography } from '@mui/material';
import React from 'react';

function InputFieldsComp({name,errors,touched,handleChange,handleBlur,values,label,type}) {
    console.log(name)
  return (
    <>
    <TextField  name={name} type={type} label={label} value={values.name}
 onChange={handleChange} onBlur={handleBlur}></TextField>
 {errors?.name && touched?.name ? <Typography sx={{color:'red'}}>{errors.name}</Typography>:null}
    </>
  )
}

export default InputFieldsComp

