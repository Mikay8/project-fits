import React from 'react';
import './NavIcons.css';
import addClosetImg from '../images/AddCloset.png';
import closetImg from '../images/Closet.png';
import calendarImg from '../images/Calendar.png';
import randImg from '../images/Randomize.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { NavLink } from 'react-router-dom';
 
const NavIcons = () => {
    return <>


       <div class="nav-grid">
               <Grid >     
                  <Row >

                  <Col xs ={3} class="nav-icon-col">
                        <NavLink to="/AddClothes"><img src={addClosetImg} class='icon-bar' /></NavLink>
                  </Col>
                  <Col xs ={3} class="nav-icon-col" >
                        <NavLink to="/Calendar"><img src={calendarImg} class='icon-bar'/></NavLink>
                        
                  </Col>
                  <Col xs ={3} class="nav-icon-col" >
                        <NavLink to="/Closet"><img src={closetImg} class='icon-bar'/></NavLink>
                  </Col>
                  <Col xs  ={3} class="nav-icon-col" >
                        <NavLink to="/Randomize"><img src={randImg} class='icon-bar'/></NavLink>
                  </Col>
                  </Row>
            
            </Grid>
         
       </div>
    </>
}
 
export default NavIcons;