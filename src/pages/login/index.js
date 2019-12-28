import React from "react"
import { Link } from "gatsby"
import './style.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Login = () => (
    <div className="wrapper">
      <TextField id="standard-basic" label="First Name" />
      <TextField id="standard-basic" label="Last Name" />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </div>
)

export default Login;
