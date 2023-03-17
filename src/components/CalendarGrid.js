import * as React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link, NavLink } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate} from  'react-router-dom';
import AddClothes from '../screens/AddClothesScreen';
const CalendarGrid = ({daysInMonth, month, year }) => {

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
        
            itemList1.push(  <Col xs class="day-col" > <p class="day">off</p> </Col>)
            
    }
    let currDay=1;
    for( let i = 1+dayOffset; i < 8; i++){ //First Week
        if(month===todayMonth &&todayYear === year && todayDay === currDay){
            itemList1.push(
             
                    <Col xs class="day-col" >
                        <NavLink to={`/Calendar/${month+1}-${currDay}-${year}` } > <p class="today">{currDay}</p> </NavLink>
                    </Col>
                  
            )
               
        }else {
            itemList1.push(
              
                    <Col xs class="day-col" >
                        <NavLink to={`/Calendar/${month+1}-${currDay}-${year}` }> <p class="day">{currDay} </p> </NavLink>
                    </Col>
            )
           
        }
        currDay++;
    }
    for( let i = 8; i < 15; i++){// Second Week
        
        if(month===todayMonth &&todayYear === year && todayDay === currDay){
            itemList2.push(  <Col xs class="day-col" ><NavLink to={`/Calendar/${month+1}-${currDay}-${year}` } > <p class="today">{currDay}</p> </NavLink></Col>)
        }else {
            itemList2.push(  <Col xs class="day-col" ><NavLink to={`/Calendar/${month+1}-${currDay}-${year}` } > <p class="day">{currDay}</p>  </NavLink></Col>)
        }
        currDay++;
    }
    for( let i = 15; i < 22; i++){//Third Week
        
        if(month===todayMonth &&todayYear === year && todayDay === currDay){
            itemList3.push(  <Col xs class="day-col" ><NavLink to={`/Calendar/${month+1}-${currDay}-${year}` } > <p class="today">{currDay}</p> </NavLink> </Col>)
        }else {
            itemList3.push(  <Col xs class="day-col" ><NavLink to={`/Calendar/${month+1}-${currDay}-${year}` }> <p class="day">{currDay}</p> </NavLink></Col>)
        }
        currDay++;
    }
    for( let i = 22; i < 29; i++){//Fourth Week
        
        if(month===todayMonth &&todayYear === year && todayDay === currDay){
            itemList4.push(  <Col xs class="day-col" ><NavLink to={`/Calendar/${month+1}-${currDay}-${year}` } > <p class="today">{currDay}</p> </NavLink> </Col>)
        }else {
            itemList4.push(  <Col xs class="day-col" ><NavLink to={`/Calendar/${month+1}-${currDay}-${year}` }> <p class="day">{currDay}</p> </NavLink></Col>)
        }
        currDay++;
    }

   
    if(daysInMonth>=28){
        for( let i = 0; i < 7; i++){//Fith Week
            if(currDay<=daysInMonth){
                if(month===todayMonth &&todayYear === year && todayDay === i){
                    itemList5.push(  <Col xs class="day-col" ><NavLink to={`/Calendar/${month+1}-${currDay}-${year}` } > <p class="today">{currDay}</p> </NavLink> </Col>)
                }else {
                    itemList5.push(  <Col xs class="day-col" ><NavLink to={`/Calendar/${month+1}-${currDay}-${year}` }> <p class="day">{currDay}</p> </NavLink></Col>)
                }

            }else{
                itemList5.push(  <Col xs class="day-col" > <a class="day">off</a> </Col>)
            }
            currDay++;
        }
        for( let i = 0; i < 7; i++){//Fith Week
            if(currDay<=daysInMonth){
                if(month===todayMonth &&todayYear === year && todayDay === i){
                    itemList6.push(  <Col xs class="day-col" ><NavLink to={`/Calendar/${month+1}-${currDay}-${year}` } > <p class="today">{currDay}</p> </NavLink> </Col>)
                }else {
                    itemList6.push(  <Col xs class="day-col" ><NavLink to={`/Calendar/${month+1}-${currDay}-${year}` }> <p class="day">{currDay}</p> </NavLink></Col>)
                }

            }else{
                itemList6.push(  <Col xs class="day-col" > <p class="day">off</p> </Col>)
            }
            currDay++;
        }
    }
  
    return  <>
        <div class="day-all">
        
            <Grid >
                    <Row class="day-row" >
                        <Col xs class="day-col" > <p class="Su">Su</p>  </Col>
                        <Col xs class="day-col" > <p class="M">M</p> </Col>
                        <Col xs class="day-col" > <p class="T">T</p>  </Col>
                        <Col xs class="day-col" > <p class="W">W</p>  </Col>
                        <Col xs class="day-col" > <p class="Th">Th</p>  </Col>
                        <Col xs class="day-col" > <p class="F">F</p>  </Col>
                        <Col xs class="day-col" > <p class="Sa">Sa</p>  </Col>
                        
                    </Row>
                
                        <Row class="day-row"  >
                            {itemList1}
                        </Row>
                        <Row class="day-row" >
                            {itemList2}
                        </Row>
                        <Row class="day-row">
                            {itemList3}
                        </Row>
                        <Row class="day-row">
                            {itemList4}
                        </Row>
                        <Row class="day-row" >
                            {itemList5}
                        </Row>

                        <Row class="day-row" >
                            {itemList6}
                        </Row>
                        
                    
                    
                            
        
                </Grid>
                
        </div> 
    </>
  
}


export default CalendarGrid;