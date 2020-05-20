import React from "react"
import { Link } from "gatsby"
import Login from '../components/login';
import { Router } from "@reach/router";

const IndexPage = () => (
  <div>
    <Router>
      <Login path="/"/>
    </Router>
   
  </div>
)

export default IndexPage;
