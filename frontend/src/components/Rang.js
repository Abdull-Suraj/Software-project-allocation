import React, { useState } from 'react';
import {Form, Row , Col, Button} from 'react-bootstrap'



const Rang = () =>{

    const [taskFields, setTaskFields] = useState([
        {task_name: '', precedence: '', required_skill:'', required_effort:''}
    ])

    const taskValue = (index,event) => {
        
       let data = [...taskFields];
        [index][event.target.name] = event.target.value;
        setTaskFields(data);

        //setTaskFields((prev) => [...prev, taskFields])
    }
	
    const addTask = () => {
        
        let newTask = {task_name: '', precedence: '', required_skill:'', required_effort:''}

        setTaskFields([...taskFields, newTask])
    }
    const generate = (e) => {
        e.preventDefault();
        console.log(taskFields)
        console.log(taskFields.length)
        console.log(taskFields[1])
    }

    const removeTask = (index) => {
        let data = [...taskFields];
        data.splice(index, 1)
        setTaskFields(data)
    }

	return(
        <div className="container simple">
            <div>
                <Form className="form-in" onSubmit={generate}>
                

                    <div className="container task-employee">
                        <Row className="" >
                            <Col className="task">
                                <h3>Tasks</h3>

                    {taskFields.map((task, index) => {
                        
                        return (
                            <>
                            <Row className="justify-content-md-center" key={index}>
                            <Col xs lg="3">
                                <Form.Group>
                                    <Form.Label>Task Name</Form.Label>
                                    <Form.Control size="sm"
                                    placeholder="Task Name"
                                    name="task_name"
                                    value= {task.task_name}
                                    onChange={(event) => taskValue(index, event)}  />
                                </Form.Group>
                            </Col>
                            <Col xs lg="3">
                                <Form.Group>
                                    <Form.Label>Precedence</Form.Label>
                                    <Form.Control size="sm"
                                    placeholder="Precedence"
                                    name="precedence"
                                    value= {task.precedence}
                                    onChange={(event) => taskValue(index, event)}  />
                                </Form.Group>
                            </Col>
                            <Col xs lg="3">
                                <Form.Group>
                                    <Form.Label>Required Skills</Form.Label>
                                    <Form.Control size="sm"
                                    placeholder="Required Skills"
                                    name="required_skills"
                                    value={task.required_skill}
                                    onChange={(event) => taskValue(index, event)}  />
                                </Form.Group>
                            </Col>
                            <Col xs lg="3">
                                <Form.Group>
                                    <Form.Label>Required Effort</Form.Label>
                                    <Form.Control size="sm"
                                    placeholder="Required Effort"
                                    name="required_effort"
                                    value={task.required_effort}
                                    onChange={(event) => taskValue(index, event)} />
                                </Form.Group>
                            </Col>
                            <Col xs lg="3">
                            <Button variant="danger" size="sm" onClick={() => removeTask(index)} >X</Button>
                            </Col>
                        </Row>
                    
                        
                        
                    
                    </>

                        )

                    })}
                    <div className="d-grid gap-2 bt-e">
                            <Button variant="primary" size="md" onClick={addTask}>
                                Add Task
                            </Button>
                        </div>

                        </Col>
                    </Row>
                </div>
                    <div className="generate d-grid gap-2 bt-e">
                <Button variant="primary" size="md" type="submit" onClick={generate}>
                    Generate Schedule
                </Button>
                </div>

            
                </Form>
            </div>
        </div>
    )	
	
}

export default Rang