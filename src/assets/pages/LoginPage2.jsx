import React from 'react';
import LoginImg from '../../assets/Images/books.jpg'; 
function LoginPageNew() {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="rounded-md overflow-hidden grid grid-cols-1 sm:grid-cols-2 max-w-4xl w-full bg-white shadow-lg">
        <div className="hidden sm:block">
          <img className="w-full h-full object-cover" src={LoginImg} alt="Login" />
        </div>

        <div className="bg-gray-100 flex flex-col justify-center p-4">
          <form className="max-w-[480px] w-full mx-auto mt-0 bg-white p-6 rounded-md">
            <h2 className="text-4xl font-bold text-center py-6">AETHA</h2>
            <div className="flex flex-col py-2">
              <label>Username</label>
              <input className="border p-2 rounded-md" type="text" />
            </div>
            <div className="flex flex-col py-2">
              <label>Password</label>
              <input className="border p-2 rounded-md" type="password" />
            </div>
            <button className="border w-full my-3 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md">
              Sign In
            </button>
            <div className="flex justify-between text-sm">
              <p className="flex items-center mr-2">
                <input className="mr-2" type="checkbox" />
                Remember me
              </p>
              <p>Create an account</p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}


export default LoginPageNew;
