import {useEffect, useState} from 'react';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {IUser} from '../@types/user';
import {handleError} from "../utils/ErrorHandler";

const SignUpSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
}).required();

const PUBLIC_ID: string = 'fioaa3fd'

const SignUpForm = () => {
    // const [isRestartSession, setRestartSession] = useState<boolean>(false);

    let face_io: any;
    useEffect(() => {
        // @ts-ignore
        face_io = new faceIO(PUBLIC_ID);
    }, []);

    const {
        register, handleSubmit, formState: {errors}
    } = useForm<IUser>({
        resolver: yupResolver(SignUpSchema)
    });

    const onSubmit = (data: IUser) => {
        alert(JSON.stringify(data));
        handleSignUp(data).then(r => {
            console.log('sign up success')
        });
    }

    //create a sign-up function that will submit the data to faceIO by calling the function faceIO enroll
    const handleSignUp = async (user: IUser) => {
        try {
            let response: any = await face_io.enroll({
                locale: 'auto',
                payload: {
                    name: `${user.name}`,
                    email: `${user.email}`,
                },
            });
            alert(
                ` User Successfully Enrolled! Details:
              Unique Facial ID: ${response.facialId}
              Enrollment Date: ${response.timestamp}
              Gender: ${response.details.gender}
              Age Approximation: ${response.details.age}
              payload: ${JSON.stringify(response.details)}`
            );
            location.reload()

        } catch (error) {
            // alert('Unable to register you please refresh page and try again');
            handleError(error);
            // restart session
            // face_io.restartSession({})
        }
    }

    return (
        <div className='max-w-md mx-auto mt-4 bg-white-100 p-8 border border-gray-3000 border-2 rounded-md'>
            <h1 className='text-3xl font-bold text-blue-600 pb-5'>
                Sign-up form using FaceIO
            </h1>
            <form className='space-y-7' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex'>
                    <label
                        htmlFor='name-field'
                        className='grid grid-cols-2 content-center text-sm font-bold backdrop:bold text-gray-600'
                    >
                        Name
                    </label>
                    <input
                        type='text'
                        placeholder='name'
                        {...register('name')}
                        className='w-full p-2 border border-blue-900 rounded mt-1'
                    />
                    {errors.name && <p className='grid text-red-900'>{errors.name.message}</p>}
                </div>
                <div className='flex'>
                    <label
                        htmlFor='email-field'
                        className='grid grid-cols-2 content-center text-sm font-bold backdrop:bold text-gray-600'
                    >
                        Email
                    </label>
                    <input
                        type='text'
                        placeholder='email@mail.com'
                        {...register('email')}
                        className='w-full p-2 border border-blue-900 rounded mt-1'
                    />
                    {errors.email && <p className='text-red-900'>{errors.email.message}</p>}
                </div>
                <div>
                    <button className='w-full py-2 px-4 bg-blue-700 rounded-md text-white text-sm'>
                        Sign Up
                    </button>
                </div>
            </form>
        </ div>
    );
}

export default SignUpForm;