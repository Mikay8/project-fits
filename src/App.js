import * as React from 'react';
import LoginScreen from './screens/loginScreen';
import Navi from './screens/Navi';
import SignInScreen from './screens/SignInScreen';

const App = () => {
    const [isLogged, setLog] = React.useState(false);
    const [isSigned, setSign] = React.useState(false);
    const [token, setToken] = React.useState();
      if (!token){
         return <LoginScreen setToken={setToken}/>
      }
    //Defaults to showing the Log Screen isLogged False
    //Once Logged in returns true 
    //
    /*
           <LoginScreen setLog={setLog} isLogged= {isLogged} setSign ={setSign} isSigned={isSigned}/>
       <SignInScreen isSigned={isSigned} setLog={setLog} isLogged= {isLogged}/>
    */

    return <>
       

       <Navi isLogged= {true}/>
       
    </>
     
   
      
    
  }
  
  export default App;