import * as React from 'react';
import './loginScreen.css';
import imageLogo from '../images/fits-logo.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({setToken}) => {
    //const [isLogged, setLog] = React.useState(true);
    //const navigate = useNavigate();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
     const sendSignUp = () => navigate('/SignUp');
    async function submit(e) {
        e.preventDefault();
    
        try {
        await axios.post("http://localhost:3000/", {
            username: username,
            password: password,
        })
        .then(res => {
            if(res.data === "exist"){
                setToken("yes")
            
            }
            else if(res.data === "not exist"){
                alert("User not found")
            }
        })
        .catch(e=> {
            alert("wrong details")
            console.log(e)
        })
    
    
        }
    
        catch (err) {
            console.log(err);
    
        }
    }
    
  

    return  <>
      

        <div class="view">
            <Grid>
                <div class="image-logo">
                    <Row >
                        
                        <Col xs={12} >

                            
                            <a > <img src={imageLogo} /></a>

                        </Col>
                
                    </Row>
                </div>

            </Grid>
            
            <form action="/">
                <Grid fluid>
                    <div class="login-row">
                        <Row >
                            
                            <Col Col xs={12} >
                                <input class="userForm" type="text" name="Email" onChange={(e) => {setUsername(e.target.value)}}  ></input>
                            </Col>
                            
                        </Row>
                    </div>
                    

                   
                    <div class="login-row">
                        <Row >
                        
                            <Col Col xs={12} >
                                <input class="passForm" type="text" name="Password"onChange={(e)=>{setPassword(e.target.value)}} ></input>
                            </Col>
                            
                        </Row>
                    </div>

                 
                    <div class="login-row">
                        <Row >
                        
                            <Col Col xs={12} >
                                <input class="LogInBtn" type="submit" onClick={submit} ></input>
                                
                            </Col>
                        
                        </Row>

                    </div>
                    
                </Grid>
                
            </form> 
            <Grid>
                <div class="login-row">
                    <Row class="login-row">
                        
                        <Col xs={12} ><a onClick={sendSignUp} > Sign Up</a> </Col>
                        
                    </Row>
                </div>
            </Grid>
            
            
        </div>
      
    </>
  
}


export default Login;
