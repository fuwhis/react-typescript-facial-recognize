import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../context/StateProvider';
import { actionTypes } from '../helpers/Reducers';
import { handleError } from "../utils/ErrorHandler";
import faceIcon from '../assets/face-id.svg';
import SocialLoginMethods from "./SocialLogin";

let PUBLIC_ID: string = 'fioaa3fd'

const Login = () => {
    //we load faceIO using a useEffect hook
    let face_io: any = null;
    useEffect(() => {
        // @ts-ignore
        face_io = new faceIO(PUBLIC_ID);
    }, []);

    //we use a useContext hook dispatch to be able to dispatch our user to the state
    const { dispatch } = useContext(userContext);

    //we set up the handle login function
    const handleLoginWithFaceIO = async () => {
        try {
            let response = await face_io.authenticate({
                locale: 'auto',
            });
            alert(`
                You have been identified successfully
                Unique Facial ID: ${response.facialId}
                PayLoad: ${JSON.stringify(response.payload)}
            `);

            dispatch({ type: actionTypes.SET_USER, user: response.payload });

            alert('You have successfully logged in');
        } catch (error) {
            // alert('Failed to log in, please refresh and try again');
            handleError(error);
            face_io.restartSession({})
        }
    };

    const handleAuthLoginJWT = () => {

    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold text-blue-600 mb-4'>
                Welcome, please login
            </h1>

            <form className='space-y-5 w-full'>
                <div className=''>
                    <label
                        htmlFor='email-field'
                        className='text-sm font-bold backdrop:bold text-gray-600'
                    >
                        Email
                    </label>
                    <input
                        type='text'
                        placeholder='email@mail.com'
                        className='w-full p-2 border border-blue-900 rounded mt-1'
                    />
                </div>
                <div className=''>
                    <label
                        htmlFor='password-field'
                        className='block text-sm font-bold backdrop:bold text-gray-600'
                    >
                        Password
                    </label>
                    <input
                        type='text'
                        placeholder='password'
                        className='w-full p-2 border border-blue-900 rounded mt-1'
                    />
                </div>
            </form>

            <div className='flex pt-4 w-full'>
                <button
                    onClick={handleAuthLoginJWT}
                    className='bg-blue-700 rounded-md text-white text-sm mb-3 h-14 w-[300%]'>
                    Login with account
                </button>
                <button
                    onClick={handleLoginWithFaceIO}
                    className='p-3 bg-white-50 rounded-md mb-3 ml-4 border-gray-200 h-14'>
                    <img alt='face-io' src={faceIcon} width='40px' height='40px' />
                </button>
            </div>

            <div className='w-full'>
                <p className='text-gray-600 pb-1'>You don't have an account? Please sign-up.</p>
                <Link to='/sign-up'>
                    <button
                        className='border-solid border-2 border-sky-500 w-full p-3 bg-white outline-blue-800 rounded-md text-blue-800 text-sm mb-4'
                    >
                        Sign Up
                    </button>
                </Link>
            </div>

            <SocialLoginMethods />

        </div>
    );
};

export default Login;