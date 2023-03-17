import React from 'react';
import imageLogo from '../images/fits-logo.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './CalendarScreen.css';
import CalendarTitle from '../components/CalendarTitle';
import CalendarGrid from '../components/CalendarGrid';
const Calendar = ({monthNum, setmonthNum,year, setYear, daysInMonth, setdaysInMonth}) => {
    
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    
    const dim = (year, month) => {
        return new Date(year, month, 0).getDate();

     }
     //console.log("month: "+months[monthNum]+" year "+year+' dim: '+daysInMonth );
    const addMonth = () => {
        if(monthNum+1 > 11){
            setmonthNum(0);
            setYear(year+1);
        }else{
            setmonthNum(monthNum+1);
        }
        setdaysInMonth(new Date(year, monthNum+1, 0).getDate());
        //console.log("month: "+months[monthNum]+" year "+year+' dim: '+daysInMonth );
        
     };
     const minusMonth = () => {
        if(monthNum-1 < 0){
            setmonthNum(11);
            setYear(year-1);
        }else{
            setmonthNum(monthNum-1);
            
        }
        setdaysInMonth(new Date(year, monthNum+1, 0).getDate());
        //console.log("month: "+months[monthNum]+" year "+year+' dim: '+daysInMonth );
      
     };

    return (
      <Grid>
        <div class="image-logo">
            <Row>
        
                <Col xs={12} >
                    <a href="/"> <img src={imageLogo} /></a>
                </Col>
            </Row>
        </div>
      
      <Row>
        
          <Col xs={4}  >
            
                <button onClick={minusMonth} class="nextBtn">  &nbsp; &lt;  &nbsp; </button>
           
          </Col>
          <Col xs={4} class="header-cal">
              <CalendarTitle month={months[monthNum]} year={year}></CalendarTitle>
          </Col>
          <Col xs={4} class="header-cal">
            <button  onClick={addMonth} class="nextBtn">  &nbsp; &gt;  &nbsp;</button>
          </Col>
      </Row>
      <CalendarGrid daysInMonth ={dim(year,monthNum+1)} month={monthNum} year={year} ></CalendarGrid>
  </Grid>
  
    );
}
 
export default Calendar;