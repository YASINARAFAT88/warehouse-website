import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from './google.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-dark w-100 mb-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-3'>Google Sign in</span>
                </button>
            </div>
            <div>
                <button className='btn btn-dark w-100 mb-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-3'>FaceBook Sign in</span>
                </button>
            </div>
            <div>
                <button className='btn btn-dark w-100'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-3'>Github Sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;