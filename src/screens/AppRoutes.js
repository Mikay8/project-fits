import * as React from 'react';
import './AppRoutes.css';
import { BrowserRouter, Routes, Route, Navigate} from  'react-router-dom';
import NavIcons from '../components/NavIcons';
import AddClothes from './AddClothesScreen';
import Calendar from './CalendarScreen';
import Closet from './ClosetScreen';
import HomeScreen from './HomeScreen'
import Day from '../components/Day'
import Settings from './SettingsScreen'

const AppRoutes = ({isLogged}) => {
   /*
   const [month, setNavimonth] = React.useState(date.getMonth());
   const [year, setNaviYear] = React.useState(date.getFullYear());
   const [dim, setDim] = React.useState(date.getFullYear());
   console.log("month: "+monthNum+" year "+year+' dim: '+daysInMonth );
   */
   const date = new Date();
   const [monthNum, setmonthNum] = React.useState(date.getMonth());
   const [year, setYear] = React.useState(date.getFullYear());
   const [daysInMonth, setdaysInMonth] = React.useState(new Date(year, monthNum+1, 0).getDate());

   let routesList=[];
    for( var i = 1; i<daysInMonth+1; i++){
      console.log(`/Calendar/${monthNum+1}-${i}-${year}`);
      routesList.push(<Route path={`/Calendar/${monthNum+1}-${i}-${year}`} element={<Day month={monthNum} day={i} year={year}/>} />);
    }
    return isLogged && <>

            <BrowserRouter class="grid">
                
                        <NavIcons />
                          <Routes>
                            <Route path="/" element={<HomeScreen/>} />
                            <Route path="/AddClothes" element={<AddClothes/>}/>
                            <Route path="/Calendar" element={<Calendar monthNum={monthNum} setmonthNum={setmonthNum} year={year} setYear={setYear} daysInMonth={daysInMonth} setdaysInMonth={setdaysInMonth}/>}/>
                            
                             {routesList}
                            <Route path="/Closet" element={<Closet/>}/>
                            <Route path="/Randomize" />
                            <Route path="/Settings" element={<Settings/>}/>
                            
                        </ Routes >
                   
              </BrowserRouter>
    </>
  
}

export const Head = () => <title>Home</title>

export default AppRoutes;