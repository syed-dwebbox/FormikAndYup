import { Button, Container,Box} from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import {signUpSchema} from '../schemas';
import InputFieldsComp from './InputFieldsComp';


const inputData = [
  {name:"name",type:"text",label:"Name" },
  {name:"email" ,type:'email',label:"Email"},
  {name:"password",type:"password",label:"Password"},
  {name:"confirm_password", type:"password",label:"Confirm Password"  }
]

function FormTwo() {
  const initialValues = {
    name:"",
    email:"",
    password:"",
    confirm_password:""
}
    const {values, errors,touched, handleBlur,handleChange,handleSubmit } = useFormik({
        initialValues,
        validationSchema:signUpSchema,
        onSubmit:(values,action) => {
            console.log(values)
            action.resetForm();
        } 
    });
    // console.log(errors);
  return (
    <Container>
  <form  autoComplete='off' onSubmit={handleSubmit} >
  <Box margin={'auto'} padding={3} borderRadius={5} marginTop={10} display="flex" flexDirection={"column"} sx={{maxWidth:{lg:'400px',sm:'300px'}}} alignContent="center" justifyContent={"center"} >
   {inputData.map((item,i) => {
    console.log(item)
    
    return <InputFieldsComp key={i} name={item.name}  type={item.type} label={item.label} errors={errors} touched={touched} values={values} handleBlur={handleBlur} handleChange={handleChange} />

   })}
{/* <TextField  name='name' type='text' label="Name" value={values.name}
 onChange={handleChange} onBlur={handleBlur}></TextField>
 {errors.name && touched.name ? <Typography sx={{color:'red'}} >{errors.name}</Typography> : null}
<br />
<TextField name='email' type='email' label="Email" value={values.email}
 onChange={handleChange} onBlur={handleBlur}></TextField>
 {errors.email && touched.email ? <Typography sx={{color:'red'}} >{errors.email}</Typography>:null}
<br />
<TextField name='password' type='password' label="Password" value={values.password} 
onChange={handleChange} onBlur={handleBlur}></TextField>
{errors.password && touched.password ? <Typography sx={{color:'red'}} >{errors.password}</Typography> : null}  
<br />
<TextField name='confirm_password' type='password' label="Confirm Password"  
value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} ></TextField>
 {errors.confirm_password && touched.confirm_password ?  <Typography sx={{color:'red'}} >{errors.confirm_password}</Typography> : null}
      <br /> */}
<Button type='submit ' variant='contained'>Submit</Button>
</Box>
      </form>
      </Container>
  )
}
export default FormTwo
