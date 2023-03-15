import * as React from 'react'
import './SignInScreen.css'

const SignInScreen = ({ isSigned,setLog, isLogged}) => {

    const logged = () => {
        setLog(true);
    };
    
    return isSigned&&(!isLogged)&&<>
      <h1>Fit- Sign in</h1>
      <p>Sign In</p>
      <button onClick={logged}>Log In</button>
    </>
  
}

export const Head = () => <title>Home</title>

export default SignInScreen;