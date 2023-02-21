import React from 'react'
import {Button} from 'react-bootstrap'

const Advance = ({created,names,cost,duration,onDelete}) => {
  return (
        <>
            <tr>
                    <td>{1}</td>
                    <td>{names}</td>
                    <td>{created}</td>
                    <td>{cost}</td>
                    <td>{duration}</td>
                    <td><Button variant="primary"  size="sm" >View</Button></td>
                    <td><Button variant="danger"  size="sm" onClick={onDelete}>Delete</Button></td>
                    
            </tr>
        
        </>
  )
}

export default Advance

