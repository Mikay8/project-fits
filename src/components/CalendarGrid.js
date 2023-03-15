import * as React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './CalendarGrid.css';
const CalendarGrid = ({daysInMonth, month, year}) => {

    const date = new Date();
    const todayMonth = date.getMonth(); 
    const todayYear = date.getFullYear();
    const todayDay = date.getDate();
    let itemList1=[];
    let itemList2=[];
    let itemList3=[];
    let itemList4=[];
    let itemList5=[];
    let itemList6=[];

    //console.log("Today is "+todayDay+" "+todayMonth+" "+todayYear );
    const firstDay = new Date((month+1) +" 1," + year);
    //console.log("first day is "+firstDay );
    const dayOffset = firstDay.getDay();
    for( let i = 1; i < dayOffset+1; i++){
        
            itemList1.push(  <Col xs> <p>off</p> </Col>)
        
    }
    let currDay=1;
    for( let i = 1+dayOffset; i < 8; i++){ //First Week
        if(month===todayMonth &&todayYear === year && todayDay === currDay){
            itemList1.push(  <Col xs ><p class="today">{currDay}</p> </Col>)
        }else {
            itemList1.push(  <Col xs> <p>{currDay}</p> </Col>)
        }
        currDay++;
    }
    for( let i = 8; i < 15; i++){// Second Week
        
        if(month===todayMonth &&todayYear === year && todayDay === currDay){
            itemList2.push(  <Col xs ><p class="today">{currDay}</p> </Col>)
        }else {
            itemList2.push(  <Col xs> <p>{currDay}</p> </Col>)
        }
        currDay++;
    }
    for( let i = 15; i < 22; i++){//Third Week
        
        if(month===todayMonth &&todayYear === year && todayDay === currDay){
            itemList3.push(  <Col xs ><p class="today">{currDay}</p> </Col>)
        }else {
            itemList3.push(  <Col xs> <p>{currDay}</p> </Col>)
        }
        currDay++;
    }
    for( let i = 22; i < 29; i++){//Fourth Week
        
        if(month===todayMonth &&todayYear === year && todayDay === currDay){
            itemList4.push(  <Col xs ><p class="today">{currDay}</p> </Col>)
        }else {
            itemList4.push(  <Col xs> <p>{currDay}</p> </Col>)
        }
        currDay++;
    }

    //console.log("days In Month"+daysInMonth );
    let endDayOffset=7;
    if(daysInMonth>=28){//Check if there is a 5 and 6th Row
        for( let i = currDay; i < daysInMonth+1; i++){//Fith Week 
        
            if(month===todayMonth &&todayYear === year && todayDay === i){
                itemList5.push(  <Col xs ><p class="today">{currDay}</p> </Col>)
            }else {
                itemList5.push(  <Col xs> <p>{currDay}</p> </Col>)
            }
            currDay++;
            endDayOffset--;
            if(endDayOffset===0){
                endDayOffset=7; 
                for( let k = i; k < daysInMonth+1; k++){//Sixth Week
        
                    if(month===todayMonth && todayYear === year && todayDay === currDay){
                        itemList6.push(  <Col xs ><p class="today">{currDay}</p> </Col>)
                    }else {
                        itemList6.push(  <Col xs> <p>{currDay}</p> </Col>)
                    }
                    currDay++;
                    endDayOffset--;
                    i++;
                }
            }
        }
        for( let i = 1; i < endDayOffset+1; i++){
        if(itemList6[0]){
            itemList6.push(  <Col xs> <p>off</p> </Col>)
        }else{
            itemList5.push(  <Col xs> <p>off</p> </Col>)
        }
            
        
    }
    }
    return  <>
            <Grid >
                <Row>
                    <Col xs> <p >Su</p>  </Col>
                    <Col xs > <p class="M">M</p> </Col>
                    <Col xs> <p class="T">T</p>  </Col>
                    <Col xs> <p class="W">W</p>  </Col>
                    <Col xs> <p class="Th">Th</p>  </Col>
                    <Col xs> <p class="F">F</p>  </Col>
                    <Col xs> <p>Sa</p>  </Col>
                    
                </Row>
                <Row>
                    {itemList1}
                </Row>
                <Row>
                    {itemList2}
                </Row>
                <Row>
                    {itemList3}
                </Row>
                <Row>
                    {itemList4}
                </Row>
                <Row >
                    {itemList5}
                </Row>

                <Row >
                    {itemList6}
                </Row>               
                <div class="cal-num"><p> <br/></p></div>
            </Grid>
    </>
  
}


export default CalendarGrid;