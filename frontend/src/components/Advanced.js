import React, {useState,useEffect} from 'react'
import {Table} from 'react-bootstrap';
import { useAuth } from '../auth'
import Advance from './Advance'


const LoggedIn = () =>{

    const [schedules, setSchedules] = useState([])

    let token = localStorage.getItem('REACT_TOKEN_AUTH_KEY')


    useEffect(
        ()=>{
            fetch('/schedules/schedules')
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setSchedules(data)
            })
            .catch(err=>console.log(err))
        },[]
    )

    const allSchedule = () =>{
        fetch('/schedules/schedules')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setSchedules(data)
        })
        .catch(err=>console.log(err))
    }

    const deleteSchedule = (ids) =>{
        console.log(ids)

        const reqOpt = {
            method:'DELETE',
            headers:{
                'Content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token)}`
            }
        }

        fetch(`/schedules/schedules/${ids}`, reqOpt)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            allSchedule()
        })
        .catch(err=>console.log(err))
    }

    return(
        <>
             <h1>Saved Projects</h1>

        <div className="table-div">
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>ID</th>
                <th>Project Name</th>
                <th>Date created</th>
                <th>Cost</th>
                <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {
                    schedules.map(
                        (schedule)=>(
                            <Advance
                            // ids={schedule.ids}
                            names={schedule.names}
                            created={schedule.created}
                            cost={schedule.cost}
                            duration={schedule.duration}
                            onDelete={()=>{deleteSchedule(schedule.ids)}}
                            />
                        )
                    )
                }
                
            </tbody>
        </Table>
        </div>
        </>
    )
}

const LoggedOut = () =>{

    return(
        <>
        </>

    )
}



const Advanced =() =>{

    const [logged]=useAuth()

    return (
        <div className="container">
           
            {logged? <LoggedIn /> : <LoggedOut />}
        </div>

    )
}



export default Advanced