import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

export default function AllRoutes(){   

    return(
        <Routes>            
            <Route index path='/' element={<LoginPage/>}></Route>
            <Route index path='/login' element={<LoginPage/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
    )
}