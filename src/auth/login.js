import React from 'react';
import './css/login.css'

const RegisterPage = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* Login container */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* Form */}
        <div className="md:w-1/2 px-16">
          <h5 className="font-blod text-2xl text-[#002D74]">Register</h5>
          <p className="text-sm mt-4 text-[#002D74]">Silahkan register dulu semisal belum memiliki akun </p>

          <form action="" className="flex flex-col gap-4">
            <input className="p-2 mt-8 rounded-xl border" type="text" name="nama" placeholder="Nama" />
            <input className="p-2 rounded-xl border" type="text" name="email" placeholder="Email" />
            <div>
              <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password" />
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3-translate-y-1/2" viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" viewBox="0 0 16 16"/>
                </svg> */}
            </div>
            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-110 duration-300">Register</button>
          </form>

          <div className="at-10 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-110 duration-300">
            <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 48 48">
              <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>Login with Google
          </button>

          <p className="mt-5 text-xs border-b border-gray-400 py-4"> 
            Forgot your password
          </p>

          <div className="mt-3 text-xs flex justify-between items-center">
            
          </div>
        </div>
        {/* Images */}
        <div className="md:block hidden w-1/2">
          <img className="sm:block hidden rounded-2xl" src="1.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
