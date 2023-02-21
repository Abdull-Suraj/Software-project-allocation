import React, {useState} from 'react'
import {Form, Button, Alert} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'


const SignUp =() =>{

    
    const [show, setShow]=useState(false)
    const [serverRes, setServerRes]=useState('')
    const {register,reset,handleSubmit,formState:{errors}} = useForm()

    const submitForm = (data)=>{
        console.log('form submitted')
        console.log(data)

        if(data.password === data.confirm_password){

            const body = {
                username:data.username,
                email:data.email,
                password:data.password
            }

            const reqOpt={
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(body)
            }

            fetch('/auth/signup',reqOpt)
            .then(res=>res.json())
            .then(data=>{
                setServerRes(data.message)
                
                setShow(true)
            })
            .catch(err=>console.log(err))

            reset()
        }
        else{
            alert("password did not match")
        }

       
        
    }

    

    return (
        <div className="container">

        {show?
            <>
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <p>
                {serverRes}
            </p>
      </Alert>
            </>
            :
            <h1>Signup page</h1>
            }

    <Form className="form-c">

        <Form.Group className="w-50">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" 
            placeholder="Username"
            {...register("username",{required:true})}
           />
        </Form.Group>
        {errors.username && <p style={{color:"red"}}><small>Username is required</small></p>}
        <br/>

      <Form.Group  className="w-50">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" 
        placeholder="Email Address"
        {...register("email", {required:true})}
       />
      </Form.Group>
      {errors.email && <p style={{color:"red"}}><small>Email is required</small></p>}
      <br/>

      <Form.Group className="w-50">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" 
        placeholder="Password"
        {...register("password", {required:true, minLength:8})}
         />
      </Form.Group>
      {errors.password && <p style={{color:"red"}}><small>Password is required</small></p>}
      {errors.password?.type==='minLength' && <p style={{color:"red"}}><small>minimum lenght 8</small></p>}
      <br/>

      
      <Form.Group className="w-50">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" 
        placeholder="Confirm Password"
        {...register("confirm_password", {required:true, minLength:8})}
       />
      </Form.Group>
      {errors.confirm_password && <span style={{color:"red"}}>Confirm Password</span>}
      {errors.confirm_password?.type==='minLength' && <p style={{color:"red"}}><small>minimum lenght 8</small></p>}
      <br/>
        
    <Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit(submitForm)}>
            SignUp
        </Button>
      </Form.Group>
      <br/>
      <Form.Group>
        <small>Already Have an Account:<Link to='/login'>Login</Link></small>
       </Form.Group>
    </Form>

    </div>

    )
}



export default SignUp