/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const SignIn = () => {
  return(
    <div className="o-form__wrapper flex justify-center">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" name='username' />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
            </button>
            <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer" href="">
                Forgot Password?
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn;