import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { useAuth, logout } from '../auth'



const LoggedInBar = () =>{

  return(
    <>
          <Nav.Link as={Link} to="/" className="active">Home</Nav.Link>  
          <Nav.Link as={Link} to= "/simple" className="active">Default</Nav.Link>
          <Nav.Link as={Link} to="/advanced" className="active">Custom</Nav.Link>
          <Nav.Link as={Link} to="/schedule" className="active">Schedule</Nav.Link>
          <Nav.Link as={Link} to="" className="active" onClick={()=>{logout()}}>Logout</Nav.Link>
    </>
  )
}

const LoggedOutBar = () =>{

  return(
    <>
          <Nav.Link as={Link} to="/" className="active">Home</Nav.Link>      
          <Nav.Link as={Link} to="/signup" className="active">Sign up</Nav.Link>
          <Nav.Link as={Link} to="/login" className="active">Login</Nav.Link>
    </>

  )
}

const NavBar = () =>{

const [logged]=useAuth()

    return(
       
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Software Project Scheduling</Navbar.Brand>
          <Nav className="me-auto">
          
          {logged?<LoggedInBar /> : <LoggedOutBar />}
          
          
          </Nav>
        </Container>
      </Navbar>
     
      
    )

}


export default NavBar