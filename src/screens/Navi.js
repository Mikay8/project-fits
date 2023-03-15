import * as React from 'react';
import './Navi.css';
import { BrowserRouter, Routes, Route, Navigate} from  'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import NavIcons from '../components/NavIcons';
import AddClothes from './AddClothesScreen';
import Calendar from './Calendar';
import Closet from './Closet';
import HomeScreen from './HomeScreen'

const Navi = ({isLogged}) => {
    return isLogged && <>

            <BrowserRouter class="grid">
                
                        <NavIcons />
                          <Routes>
                            <Route path="/" element={<HomeScreen/>} />
                            <Route path="/AddClothes" element={<AddClothes/>}/>
                            <Route path="/Calendar" element={<Calendar/>}/>
                            <Route path="/Closet" element={<Closet/>}/>
                            <Route path="/Randomize" />
                        </ Routes >
                   
              </BrowserRouter>
    </>
  
}

export const Head = () => <title>Home</title>

export default Navi;