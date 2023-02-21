import React from 'react';
import {Card, Row , Col, Table} from 'react-bootstrap';
import CanvasJSReact from '../assets/canvasjs.react';

//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Schedule = () =>{
	
		const options = {
			animationEnabled: true,
			title:{
				text: "Project Schedule",
				fontFamily: "helvetica"
			},
			axisY: {
				title: "Duration in Months",
				postfix: "M",
				lineThickness: 2
			},
			data: [{
				type: "rangeBar",
				yValueFormatString: "",
				dataPoints: [
					{ label: "Task 5", y: [25, 35] },
					{ label: "Task 4", y: [10, 25] },
					{ label: "Task 3", y: [6, 20] },
					{ label: "Task 2", y: [10, 25] },
					{ label: "TAsk 1", y: [0, 10] },
					
				]
			}]
		}
		return (
		<div className="container">

            <div className="card-div">
            
            <Row className="justify-content-md-center">
                <Col xs lg="3">
                    <Card 
                    bg="primary"
                    key="primary"
                    text="dark"
                    className="mb-2"
                    style={{ width: '12rem'}}>
                        <Card.Header><b>Cost</b></Card.Header>
                        <Card.Body>
                            <Card.Text><b>$1200</b>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs lg="3">
                    <Card 
                    bg="primary"
                    key="primary"
                    text="dark"
                    className="mb-2"
                    style={{ width: '12rem'}}>
                        <Card.Header><b>Duration</b></Card.Header>
                        <Card.Body>
                            <Card.Text><b>6 Months</b>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            </div>


            <div>
			    <CanvasJSChart options = {options}/>
            </div>

            <div className="table-div">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Employee</th>
                    <th>Task 1</th>
                    <th>Task 2</th>
                    <th>Task 3</th>
                    <th>Task 4</th>
                    <th>Task 5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>20%</td>
                    <td>30%</td>
                    <td>10%</td>
                    <td>90%</td>
                    <td>70%</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Mark</td>
                    <td>20%</td>
                    <td>30%</td>
                    <td>10%</td>
                    <td>90%</td>
                    <td>70%</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Mark</td>
                    <td>20%</td>
                    <td>30%</td>
                    <td>10%</td>
                    <td>90%</td>
                    <td>70%</td>
                    </tr>
                    <tr>
                    <td>4</td>
                    <td>Mark</td>
                    <td>20%</td>
                    <td>30%</td>
                    <td>10%</td>
                    <td>90%</td>
                    <td>70%</td>
                    </tr>
                    <tr>
                    <td>5</td>
                    <td>Mark</td>
                    <td>20%</td>
                    <td>30%</td>
                    <td>10%</td>
                    <td>90%</td>
                    <td>70%</td>
                    </tr>
                </tbody>
            </Table>
            </div>


		</div>
		);
}

export default Schedule