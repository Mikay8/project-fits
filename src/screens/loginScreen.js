import * as React from 'react';
import './loginScreen.css';
import imageLogo from '../images/fits-logo.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BrowserRouter, Routes, Route, useNavigate} from  'react-router-dom';

const LoginScreen = ({setToken}) => {
    //const [isLogged, setLog] = React.useState(true);
    //const navigate = useNavigate();
    
     const printT = () => {
        console.log("Test");
     };

    return  <>
      

        <div class="view">
            <Grid>
                <Row>
                    
                    <Col xs={12} >

                        
                        <a href="/" onClick={printT()}> <img src={imageLogo} /></a>

                    </Col>
            
                </Row>
            </Grid>
            
            <form action="/">
                <Grid fluid>
                    <Row>
                        
                        <Col Col xs={12} >
                            <input class="userForm" type="text" value="Username"></input>
                        </Col>
                        
                    </Row>

                   

                    <Row>
                       
                        <Col Col xs={12} >
                            <input class="passForm" type="text" value="Password"></input>
                        </Col>
                        
                    </Row>

                 

                    <Row>
                    
                    <Col Col xs={12} >
                        <input class="LogInBtn" type="submit" onClick={setToken("TOKEN")} value="Log In"></input>
                        
                    </Col>
                    
                    </Row>
                </Grid>
                
            </form> 
            <Grid>
                <Row>
                    
                    <Col xs={12} ><button class="SignUpBtn" > Sign Up </button>   </Col>
                    
                </Row>
            </Grid>
            
            
        </div>
      
    </>
  
}


export default LoginScreen;
