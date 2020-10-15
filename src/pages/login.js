import React from "react"

import LoginComponent from "../components/Login/Login"
import SEO from "../containers/seo"


const Login = () => (
  <React.Fragment>
    <SEO title="Login" />
    <LoginComponent />
  </React.Fragment>
)

export default Login
