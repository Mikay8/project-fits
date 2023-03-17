import * as React from 'react';
import Login from './screens/loginScreen';
import AppRoutes from './screens/AppRoutes';
import SignUp from './screens/SignUpScreen';
import { BrowserRouter, Routes, Route, NavLink} from  'react-router-dom';

const App = () => {
    const [isLogged, setLog] = React.useState(false);
    const [isSigned, setSign] = React.useState(false);
    const [token, setToken] = React.useState();
      if (!token){
         return <Login setToken={setToken}/>


      }
    //Defaults to showing the Log Screen isLogged False
    //Once Logged in returns true 
    //
    /*
           <LoginScreen setLog={setLog} isLogged= {isLogged} setSign ={setSign} isSigned={isSigned}/>
       <SignInScreen isSigned={isSigned} setLog={setLog} isLogged= {isLogged}/>
    */

    return <>
       

       <AppRoutes isLogged= {true}/>
       
    </>
     
   
      
    
  }
  
  export default App;