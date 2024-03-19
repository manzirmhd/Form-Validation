import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'


const schema = yup.object().shape({
  firstName: yup.string().required("first name is mandatory"),
  lastName: yup.string().required("last name is mandatory"),
  email: yup.string().email('please enter valid email').required('enter email'),
  age: yup.number().integer().positive().required(),
  password: yup.string().required().min(4, 'minimum 4 characters required').max(10, 'enter upto 10 characters'),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
})


function FormValidation () {
  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema),
    mode:'onChange'
  });
  console.log(errors)

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit( (data) => {
        console.log(data)
      })}
       className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <input {...register("firstName")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="First Name"/>
            <p className='text-red-700'>{errors?.firstName?.message}</p>
        </div>

        <div className="mb-4">
          <input {...register("lastName")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Last Name"/>
            <p className='text-red-700'>{errors?.lastName?.message}</p>
        </div>

        <div className="mb-4">
          <input {...register("email")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"/>
            <p className='text-red-700'>{errors?.email?.message}</p>
        </div>

        <div className="mb-4">
          <input {...register("age")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Age"/>
            <p className='text-red-700'>{errors?.age?.message}</p>
        </div>

        <div className="mb-4">
         <input {...register("password")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password" type='password'/>
            <p className='text-red-700'>{errors?.password?.message}</p>
        </div>

        <div className="mb-4">
          <input {...register("confirmPassword")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Confirm Password" type='password'/>
            <p className='text-red-700'>{errors?.confirmPassword?.message}</p>
        </div>

        <div className="flex items-center justify-center pt-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
            type="submit" 
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormValidation;

