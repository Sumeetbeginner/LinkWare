import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Warehouse from './components/WarehouseDesign/Warehouse'
import Startup from './components/Startup/Startup'
import Registration from './components/Authentication/Registration'
import Login from './components/Authentication/Login'
import Main from './components/Home/Main'
import NavbarW from './components/Worker/NavbarW'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/designwarehouse' Component={Warehouse} />
      <Route path='/startup' Component={Startup} />
      <Route path='/registration' Component={Registration} />
      <Route path='/login' Component={Login} />
      <Route path='/' Component={Main} />
      <Route path='/worker' Component={NavbarW} />
    </Routes>
    </BrowserRouter>
  )
}

export default App