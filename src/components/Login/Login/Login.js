import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const location = useLocation()
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    let from = location.state?.from?.pathname || "/"

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const habdleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)

        signInWithEmailAndPassword(email, password)
    }
    if(user){
        navigate(from, {replace: true});
    }
    
    const handleSignUp = event =>{
        navigate('/signup')
   }
   const handleForgetPass = async()=>{
       const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
   }
    return (
        <div className='container w-50 mx-auto mb-5 mt-5 rounded-3 shadow p-3 mb-5 bg-body rounded'>
            <h2 className='text-dark text-center'>Please login</h2>
            <Form onSubmit={habdleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
    
                <Button className='w-100 fw-bold mt-2' variant="dark" type="submit">
                    Log in
                </Button>
            </Form>
            <p className='mt-3'>New to Warehouse? <Link onClick={handleSignUp} to='/signup' className='text-primary pe-auto text-decoration-none'>Please Sign Up</Link></p>
            <p className='mt-3'>Forget Password <Link onClick={handleForgetPass} to='/signup' className='text-primary pe-auto text-decoration-none'>reset Password</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;