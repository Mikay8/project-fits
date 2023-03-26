import * as React from 'react';
import './loginScreen.css';
import imageLogo from '../images/fits-logo.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';

const SignUp = ({setToken}) => {
    //const [isLogged, setLog] = React.useState(true);
    //const navigate = useNavigate();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
     const printT = () => {
        console.log("Test");
     };
     async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:3000/SignUp",{
                username,password
            })
            .then(res=>{
                if(res.data="exists"){
                    alert("You Exist")
                }else{
                    setToken("Welcome")
                }
            }).catch(e=>{
                alert("Wrong")
                console.log(e)

            })
        }catch(e){
            console.log(e);
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
                                <input class="userForm" type="text" onChange={(e)=>setUsername(e.target.value)} ></input>
                            </Col>
                            
                        </Row>
                    </div>
                    

                   
                    <div class="login-row">
                        <Row >
                        
                            <Col Col xs={12} >
                                <input class="passForm" type="text" onChange={(e)=>setPassword(e.target.value)}></input>
                            </Col>
                            
                        </Row>
                    </div>

                 
                    <div class="login-row">
                        <Row >
                        
                            <Col Col xs={12} >
                                <input class="LogInBtn" type="submit" onClick={submit()} value="Sign In"></input>
                                
                            </Col>
                        
                        </Row>

                    </div>
                    
                </Grid>
                
            </form> 
          
            
            
        </div>
      
    </>
  
}


export default SignUp;
