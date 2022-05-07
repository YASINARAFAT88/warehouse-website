import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
        const [updateProfile, updating, updateError] = useUpdateProfile(auth)

        const nameRef = useRef('')
        const emailRef = useRef('')
        const passwordRef = useRef('')
        const navigate = useNavigate()

        const habdleSubmit = async event =>{
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
        navigate('/home')
    }
    const navigateLogin = event =>{
        navigate('/login')
   }
   if(user){
       navigate('/home')
   }
    return (
        <div className='container w-50 mx-auto mb-5 mt-5 rounded-3 shadow p-3 mb-5 bg-body rounded'>
            <h2 className='text-dark text-center'>Please Register</h2>
            <Form onSubmit={habdleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3 text-dark" controlId="formBasicCheckbox">
                    <Form.Check className='text-dark' type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Register
                </Button>
            </Form>
            <p className='mt-3'>You have Warehouse account? <Link 
            onClick={navigateLogin} to='/login' className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;