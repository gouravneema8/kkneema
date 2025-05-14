import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import Bhajhan from "./Bhajhan";
import Poem from "./Poem";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Menu()
{
    return(
        <>
<BrowserRouter>
<div className="menu1">
<Navbar bg="warning" data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{color:"black"}}>KKNeema</Navbar.Brand>
          <Nav className="me-auto">
          <Navbar.Brand><NavLink to='/' style={{textDecoration:"none",color:"black"}}>Home</NavLink></Navbar.Brand>
          <Navbar.Brand><NavLink to='/Bhajhan' style={{textDecoration:"none",color:"black"}}>Bhajan</NavLink></Navbar.Brand>
          <Navbar.Brand><NavLink to='/Poem' style={{textDecoration:"none",color:"black"}}>Poem</NavLink></Navbar.Brand>
          <Navbar.Brand><NavLink to='/Aboutus' style={{textDecoration:"none",color:"black"}}>About</NavLink></Navbar.Brand>

           </Nav>
        </Container>
      </Navbar>
</div>

{/* for responsive design small size from line 11*/}
<div className="container-fluid menu2">
<Navbar collapseOnSelect expand="lg" bg="warning">
      <Container>
        <Navbar.Brand href="#home">KKNeema</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand><NavLink to='/' style={{textDecoration:"none",color:"black"}}>Home</NavLink></Navbar.Brand>
          <Navbar.Brand><NavLink to='/Bhajhan' style={{textDecoration:"none",color:"black"}}>Bhajan</NavLink></Navbar.Brand>
          <Navbar.Brand><NavLink to='/Poem' style={{textDecoration:"none",color:"black"}}>Poem</NavLink></Navbar.Brand>
          <Navbar.Brand><NavLink to='/Aboutus' style={{textDecoration:"none",color:"black"}}>About</NavLink></Navbar.Brand>          
          </Nav>
           </Navbar.Collapse>
      </Container>
    </Navbar>
</div>




{/* for responsive design small size */}


<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Bhajhan" element={<Bhajhan/>}/>
    <Route path="/Poem" element={<Poem/>}/>
    <Route path="/Aboutus" element={<Aboutus/>}/>
</Routes>
              </BrowserRouter>
        </>
    );
}

export default Menu;