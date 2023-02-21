import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { login } from '../auth'
import { useNavigate } from 'react-router-dom'


const Login =() =>{

    const {register,handleSubmit,reset,formState:{errors}}=useForm()

    const navigate=useNavigate()

    const loginForm = (data)=>{
        console.log('form submitted')
        console.log(data)


        const reqOpt={
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }

        fetch('/auth/login', reqOpt)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.access_token)
            login(data.access_token)

            navigate('/')
        })

        reset()

    }

    return (
        <div className="container">
            <h1>Login page</h1>

    <Form className="form-c">
        <Form.Group className="w-50">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" 
            placeholder="Username"
            {...register('username',{required:true})}
            />
        </Form.Group>
        {errors.username && <p style={{color:"red"}}><small>Username is required</small></p>}
        <br/>

        <Form.Group className="w-50">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" 
        placeholder="Password"
        {...register('password',{required:true, minLength:8})}
        />
      </Form.Group>
      {errors.password && <p style={{color:"red"}}><small>Password is required</small></p>}
      {errors.password?.type==='minLength' && <p style={{color:"red"}}><small>minimum lenght 8</small></p>}
      <br/>

      <Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit(loginForm)}>
            Login
        </Button>
      </Form.Group>
      <br/>
      <Form.Group>
        <small>Don't Have an Account:<Link to='/signup'>Sign up</Link></small>
       </Form.Group>
    </Form>

        </div>

    )
}



export default Login