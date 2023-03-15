import React from 'react';
import imageLogo from '../images/fits-logo.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Calendar.css';
import CalendarTitle from '../components/CalendarTitle';
import CalendarGrid from '../components/CalendarGrid';
const Calendar = () => {
    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    const [monthNum, setmonthNum] = React.useState(date.getMonth());
    const [year, setYear] = React.useState(date.getFullYear());
    
    const dim = (year, month) => {
        return new Date(year, month, 0).getDate();

     }
 
    const addMonth = () => {
        if(monthNum+1 > 11){
            setmonthNum(0);
            setYear(year+1);
        }else{
            setmonthNum(monthNum+1);
        }
     
        //console.log('Month: '+months[monthNum]+ ' num '+monthNum );
        
     };
     const minusMonth = () => {
        if(monthNum-1 < 0){
            setmonthNum(11);
            setYear(year-1);
        }else{
            setmonthNum(monthNum-1);
            
        }
        
        //console.log('Month: '+months[monthNum]+ ' num '+monthNum );
      
     };

    return (
      <Grid>
      <Row>
          <Col xs={12} >
              <a href="/"> <img src={imageLogo} /></a>
          </Col>
      </Row>
      <Row>
          <Col xs={4} >
            <button onClick={minusMonth}> minus</button>
          </Col>
          <Col xs={4} >
              <CalendarTitle month={months[monthNum]} year={year}></CalendarTitle>
          </Col>
          <Col xs={4} >
            <button  onClick={addMonth}> add</button>
          </Col>
      </Row>
      <CalendarGrid daysInMonth ={dim(year,monthNum+1)} month={monthNum} year={year}></CalendarGrid>
  </Grid>
  
    );
}
 
export default Calendar;