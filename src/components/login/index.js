import React, { useEffect } from "react"
import { Link } from "gatsby"
import './style.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Login = () => (
   <div className="wrapper">
      <TextField id="standard-basic" label="First Name" />
      <TextField id="standard-basic" label="Last Name" />
      <Link to='/news'>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Link> 
    </div>
   )

export default Login;
