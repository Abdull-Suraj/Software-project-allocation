import React, { useState } from 'react'
import {Form, Row , Col, Button} from 'react-bootstrap'
import { useForm } from 'react-hook-form'


const Simple =() =>{

    const {register,reset,handleSubmit,formState:{errors}}=useForm()
    const [form, setForm] = useState([])
    const [form2, setForm2] = useState([])


    const generate = (data) =>{
        console.log("form submitted")
        console.log(data)
        console.log(form)
       


        reset()


    }

    

    const handle_task = () =>{
       
        const inputt = {
            task_name:"",
            precedence:"",
            required_effort:"",
            required_skills:""

        };

        setForm((prev) => [...prev, inputt])

    }
    const handle_employee = () =>{
       
        const inputts = {
            employee_name:"",
            salary:"",
            skills:"",

        };

        setForm2((prev) => [...prev, inputts])

    }
    
    //form one
    const onChange =(index,event) =>{
        event.preventDefault()
        event.persist()
       
        setForm((prev)=>{
           return prev.map((item, i)=>{
                if(i !== index){
                    return item
                }

                return{
                    ...item,
                    [event.target.name]:event.target.value,
                }
            })
        })

    }


    const handleFieldRemove = (event, index) =>{
        event.preventDefault()
    
        
        setForm(prev =>prev.filter((item)=> item !== prev[index]))


    }

     //form two
    const onChange2 =(index,event) =>{
        event.preventDefault()
        event.persist()
       
        setForm2((prev)=>{
           return prev.map((item, i)=>{
                if(i !== index){
                    return item
                }

                return{
                    ...item,
                    [event.target.name]:event.target.value,
                }
            })
        })

    }


    const handleFieldRemove2 = (event, index) =>{
        event.preventDefault()
    
        
        setForm2(prev =>prev.filter((item)=> item !== prev[index]))


    }


    return (
        <div className="container simple">
            <div>
            <Form className="form-in">
                <Row className="justify-content-md-center">
                    <Col xs lg="3">
                        <Form.Group>
                            <Form.Label>Cost Weight</Form.Label>
                            <Form.Control placeholder="Cost Weight"
                            {...register("cost_weight",{required:true})}
                            />  
                        </Form.Group>
                        {errors.cost_weight && <p style={{color:"red"}}><small>Cost weight is required</small></p>}
                    </Col>
                    <Col xs lg="3">
                        <Form.Group>
                            <Form.Label>Duration weight</Form.Label>
                            <Form.Control placeholder="Duration weight"
                            {...register("duration_weight",{required:true})}
                            />
                        </Form.Group>
                        {errors.duration_weight && <p style={{color:"red"}}><small>Duration weight is required</small></p>}
                    </Col>
                    <Col xs lg="3">
                        <Form.Group>
                            <Form.Label>Project Name</Form.Label>
                            <Form.Control placeholder="Project Name"
                            {...register("project_name",{required:true})}
                            />
                        </Form.Group>
                        {errors.project_name && <p style={{color:"red"}}><small>Project Name is required</small></p>}
                    </Col>
                </Row>
                <div className="container task-employee">
                <Row className="" >
                    <Col className="task">
                        <h3>Tasks</h3>
                        {JSON.stringify(form)}

                    {
                        form.map((item,index)=>(
                        
                    
                        <Row className="justify-content-md-center" key ={`item-${index}`}>
                    <Col xs lg="3">
                        <Form.Group>
                            <Form.Label>Task Name</Form.Label>
                            <Form.Control size="sm"
                             placeholder="Task Name"
                             name="task_name"
                             value= {item.task_name}
                             onChange={(e)=>onChange(index,e)}  />
                        </Form.Group>
                    </Col>
                    <Col xs lg="3">
                        <Form.Group>
                            <Form.Label>Precedence</Form.Label>
                            <Form.Control size="sm"
                             placeholder="Precedence"
                             name="precedence"
                             value= {item.precendence}
                             onChange={(e)=>onChange(index,e)}  />
                        </Form.Group>
                    </Col>
                    <Col xs lg="3">
                        <Form.Group>
                            <Form.Label>Required Skills</Form.Label>
                            <Form.Control size="sm"
                             placeholder="Required Skills"
                             name="required_skills"
                             value={item.required_skills}
                             onChange={(e)=>onChange(index,e)}  />
                        </Form.Group>
                    </Col>
                    <Col xs lg="3">
                        <Form.Group>
                            <Form.Label>Required Effort</Form.Label>
                            <Form.Control size="sm"
                             placeholder="Required Effort"
                             name="required_effort"
                             value={item.required_effort}
                             onChange={(e)=>onChange(index,e)} />
                        </Form.Group>
                    </Col>
                    <Col xs lg="3">
                      <Button variant="danger" size="sm" onClick={(e)=>handleFieldRemove(e,index)}>X</Button>
                    </Col>
                </Row>
                        
                    ))}
                
                <div className="d-grid gap-2 bt-e">
                    <Button variant="primary" size="md" onClick={handle_task}>
                        Add Task
                    </Button>
                </div>
                    
                    </Col>
                    
                    <Col className="employee">
                        <h3>Employees</h3>
                        {
                        form2.map((item,index)=>(
                        
                    
                        <Row className="justify-content-md-center" key ={`item-${index}`}>
                    <Col xs lg="3">
                        <Form.Group>
                            <Form.Label>Employee</Form.Label>
                            <Form.Control size="sm"
                             placeholder="Employee"
                             name="employee_name"
                             value= {item.employee_name}
                             onChange={(e)=>onChange2(index,e)}  />
                        </Form.Group>
                    </Col>
                    <Col xs lg="3">
                        <Form.Group>
                            <Form.Label>Salary</Form.Label>
                            <Form.Control size="sm"
                             placeholder="Salary"
                             name="salary"
                             value= {item.salary}
                             onChange={(e)=>onChange2(index,e)}  />
                        </Form.Group>
                    </Col>
                    <Col xs lg="3">
                        <Form.Group>
                            <Form.Label>Skills</Form.Label>
                            <Form.Control size="sm"
                             placeholder="Skills"
                             name="skills"
                             value={item.skills}
                             onChange={(e)=>onChange2(index,e)}  />
                        </Form.Group>
                    </Col>
                    <Col xs lg="3">
                      <Button variant="danger" size="sm" onClick={(e)=>handleFieldRemove2(e,index)}>X</Button>
                    </Col>
                </Row>
                        
                    ))}
                <div className="d-grid gap-2 bt-e">
                <Button variant="primary" size="md" onClick={handle_employee}>
                    Add Employee
                </Button>
                </div>
                    </Col>
                </Row>
                </div>

                <div className="generate d-grid gap-2 bt-e">
                <Button variant="primary" size="md" type="submit" onClick={handleSubmit(generate)}>
                    Generate Schedule
                </Button>
                </div>

                </Form>
            </div>
        </div>

    )
}

 

export default Simple