import React from 'react';
import { useForm } from 'react-hook-form';

function App () {
  const { register, handleSubmit, formState:{errors}} = useForm();
 
  console.log(errors)

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit( (data) => {
        console.log(data)
      })} className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>

          <input {...register('firstName', {required:"first name is required", minLength:{
            value:4,
            message:"minimum four characters required"
          }})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          {errors?.firstName && <p>{errors.firstName.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input {...register('lastName', {required:"last name is required"})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          {errors?.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input {...register('email', {required:"email is required"})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
          />
          {errors?.email && <p>{errors.email.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea {...register('message', {required:"message is required"})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Message"
            name="message"
          ></textarea>
          {errors?.message && <p>{errors.message.message}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;

