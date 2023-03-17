import * as React from 'react';
import './loginScreen.css';
import imageLogo from '../images/fits-logo.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SignUp from './SignUpScreen';


const Login = ({setToken}) => {
    //const [isLogged, setLog] = React.useState(true);
    //const navigate = useNavigate();
    
     const printT = () => {
        console.log("Test");
     };

    return  <>
      

        <div class="view">
            <Grid>
                <div class="image-logo">
                    <Row >
                        
                        <Col xs={12} >

                            
                            <a href="/" onClick={printT()}> <img src={imageLogo} /></a>

                        </Col>
                
                    </Row>
                </div>

            </Grid>
            
            <form action="/">
                <Grid fluid>
                    <div class="login-row">
                        <Row >
                            
                            <Col Col xs={12} >
                                <input class="userForm" type="text" value="Username"></input>
                            </Col>
                            
                        </Row>
                    </div>
                    

                   
                    <div class="login-row">
                        <Row >
                        
                            <Col Col xs={12} >
                                <input class="passForm" type="text" value="Password"></input>
                            </Col>
                            
                        </Row>
                    </div>

                 
                    <div class="login-row">
                        <Row >
                        
                            <Col Col xs={12} >
                                <input class="LogInBtn" type="submit" onClick={setToken()} value="Log In"></input>
                                
                            </Col>
                        
                        </Row>

                    </div>
                    
                </Grid>
                
            </form> 
            <Grid>
                <div class="login-row">
                    <Row class="login-row">
                        
                        <Col xs={12} ><a href="/SignUp" class="SignInBtn"> Sign Up</a>  </Col>
                        
                    </Row>
                </div>
            </Grid>
            
            
        </div>
      
    </>
  
}


export default Login;
