import * as React from 'react'
import './SignUpScreen.css'

const SignUp = ({ isSigned,setLog, isLogged}) => {

    const logged = () => {
        setLog(true);
    };
    
    return isSigned&&(!isLogged)&&<>
      <h1>Fit- Sign in</h1>
      <p>Sign Up</p>
      <button onClick={logged}>Log In</button>
    </>
  
}

export const Head = () => <title>Home</title>

export default SignUp;