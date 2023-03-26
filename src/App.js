import * as React from 'react';
import Login from './screens/loginScreen';
import AppRoutes from './screens/AppRoutes';
import SignUp from './screens/SignUpScreen';
import Error from './screens/ErrorScreen';
import { BrowserRouter, Routes, Route} from  'react-router-dom';

const App = () => {
    
    const [token, setToken] = React.useState();

    
      if (!token){
         
         return <>
           
               <Routes>
                  <Route path="/" index element={<Login setToken={setToken}/>}/>
                  <Route path="/SignUp" element={<SignUp setToken={setToken}/>} />
                  <Route path="*"  element={<Error/>}/>
               
               </Routes>
          
         </>
         

      }

    return <>
       

       <AppRoutes />
       
    </>
     

   
  }
  
  export default App;