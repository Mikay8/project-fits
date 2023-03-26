import React from 'react';
import './HomeScreen.css';
import imageLogo from '../images/fits-logo.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {useNavigate} from 'react-router-dom';
const HomeScreen = () => {
    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    const navigate = useNavigate();
     const sendHome = () => navigate('/Home');
     const sendSettings = () => navigate('/Settings');
    return (
       <div>
          
          <Grid>
        
                    <Row>

                            <Col xs ={8}>
                               
                                <Row center="xs">
                                    <Col xs={4} xsOffset={6}>
                                        <a onClick={sendHome} > <img src={imageLogo} /></a>
                                    </Col>
                                </Row>
                            </Col>
                       
                            <Col xs ={4}>
                               
                                <Row end="xs">
                                    <Col xs={4} >
                                         <a onClick={sendSettings} class="logo"> Settings</a>
                                    </Col>
                                </Row>
                            </Col>
                            

                    </Row>
               
                
                <Row>
                    <Col xs={8} >
                        <p class="date">Today is <br/> {month} {day}, {year} </p>
                    </Col>
                    <Col xs={4} >
                 
                           <p>weather</p> 
                      
                        
                    </Col>
                </Row>
            </Grid>
          
       </div>
    );
}
 
export default HomeScreen;