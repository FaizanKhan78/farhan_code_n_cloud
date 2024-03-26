import { useState } from "react";
import axios from "axios";
import { useAuth } from "../Hooks/useAuth";
import { toast } from 'react-toastify';

const Login = ( { handleLoginModal } ) =>
{
  const loginSchema = {
    email: "",
    password: ""
  };
  const { setUser } = useAuth();
  const [ loginData, setLoginData ] = useState( loginSchema );
  const handleChange = ( e ) =>
  {
    const { name, value } = e.target;
    setLoginData( { ...loginData, [ name ]: value } );
  };
  const handleSubmit = async ( e ) =>
  {
    e.preventDefault();
    try
    {
      const res = await axios.post( 'http://localhost:8000/api/auth/login', loginData );
      console.log( res.data );
      setUser( res.data );
      setLoginData( loginSchema );
      toast.success( "Login Successful", {
        theme: "colored",
        autoClose: 2000,
        position: "top-left",
      } );
      handleLoginModal();

    } catch ( error )
    {
      console.log( error );
      toast.error( error.response, {
        theme: "colored",
        autoClose: 2000,
        position: "top-left",
      } );
      handleLoginModal();
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50">
      <section className="bg-gray-50 dark:bg-gray-900 rounded-md">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at <span className="underline">CodenCloud</span> we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          </div>
          <div>
            <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Sign in to Flowbite
              </h2>
              <form className="mt-8 space-y-6" onSubmit={ handleSubmit }>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" onChange={ handleChange } value={ loginData.email } id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xxxx@email.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                  <input type="password" name="password" onChange={ handleChange } value={ loginData.password } id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-5">Login to your account</button>
                <button type="button" onClick={ handleLoginModal } className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-200  hover:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 text-gray-950">
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Login;