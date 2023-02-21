import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from '../auth'


const LoggedInLand = () =>{

    return(
      <>
        <h1>Homepage</h1>
        <h2>Welcome to back</h2>
      </>
    )
  }
  
  const LoggedOutLand = () =>{
  
    return(
      <>
        <h1>Homepage</h1>
            <Link to='/signup' className="btn btn-primary btn-lg">get started Software Projects</Link>
      </>
  
    )
  }




const Home =() =>{

    const [logged]=useAuth()

    return (
        <div className="container">
            {logged?<LoggedInLand />:<LoggedOutLand />}
        </div>

    )
}



export default Home

