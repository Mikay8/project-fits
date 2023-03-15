import React from 'react';
import './HomeScreen.css';
import imageLogo from '../images/fits-logo.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
const HomeScreen = () => {
    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    return (
       <div>
          
          <Grid>
                <Row>
                    <Col xs={12} >
                        <a href="/"> <img src={imageLogo} /></a>
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