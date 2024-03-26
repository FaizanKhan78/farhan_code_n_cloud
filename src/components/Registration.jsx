import { useState } from "react";
import { toast } from 'react-toastify';
import axios from 'axios';
import { data } from '../data/data';
import profile from '../images/profile.png';
const Registration = ( { handleRegistrationModal } ) =>
{
  const [ formData, setFormData ] = useState( {
    file: "",
    name: "",
    email: "",
    password: "",
    number: "",
    gender: "",
    level: "",
    courses: "",
    mode: "",
  } );
  const handleSubmit = async ( e ) =>
  {
    e.preventDefault();
    const payload = { ...formData, number: parseInt( formData.number ) };
    const formDataToSend = new FormData();
    formDataToSend.append( 'courses', payload.courses );
    formDataToSend.append( 'email', payload.email );
    formDataToSend.append( 'name', payload.name );
    formDataToSend.append( 'password', payload.password );
    formDataToSend.append( 'gender', payload.gender );
    formDataToSend.append( 'level', payload.level );
    formDataToSend.append( 'mode', payload.mode );
    formDataToSend.append( 'number', payload.number );
    formDataToSend.append( 'file', payload.file );
    try
    {
      const res = await axios.post( "http://localhost:8000/api/auth/registration", formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      } );
      toast.success( res.data + " please login", {
        theme: "colored",
        autoClose: 2000,
        position: "top-left",
      } );
      setFormData( {
        file: "",
        name: "",
        email: "",
        password: "",
        number: "",
        gender: "",
        level: "",
        courses: "",
        mode: "",
      } );
      handleRegistrationModal();
    } catch ( error )
    {
      console.log( error );
      toast.error( "Please Fill All The Fields Properly", {
        theme: "colored",
        autoClose: 2000,
        position: "top-left",
      } );
      handleRegistrationModal();
    }
  };
  const handleChange = ( e ) =>
  {
    const { name, value, files } = e.target;
    if ( name === 'file' )
    {
      setFormData( { ...formData, [ name ]: files[ 0 ] } );
    } else
    {
      setFormData( { ...formData, [ name ]: value } );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

        <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            Profile
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Manage your name, password and account settings.
          </p>


          <form onSubmit={ handleSubmit }>

            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
              <div className="sm:col-span-3">
                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  Profile photo
                </label>
              </div>


              <div className="sm:col-span-9">
                <div className="flex items-center gap-5">
                  <img className="inline-block size-16 rounded-full object-cover ring-2 ring-white dark:ring-gray-800" src={ profile } alt="Image Description" />
                  <div className="flex gap-x-2">
                    <div>
                      <form>
                        <label className="block">
                          <span className="sr-only">Choose profile photo</span>
                          <input type="file" name="file" onChange={ handleChange } className="block w-full text-sm text-gray-500
                            file:me-4 file:py-2 file:px-4
                            file:rounded-lg file:border-0
                            file:text-sm file:font-semibold
                            file:bg-blue-600 file:text-white
                            hover:file:bg-blue-700
                            file:disabled:opacity-50 file:disabled:pointer-events-none
                            dark:file:bg-blue-500
                            dark:hover:file:bg-blue-400
                          " encType="multipart/form-data" />
                        </label>
                      </form>
                    </div>
                  </div>
                </div>
              </div>


              <div className="sm:col-span-3">
                <label htmlFor="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  Full name
                </label>
              </div>


              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <input id="af-account-full-name" name="name" onChange={ handleChange } value={ formData.name } type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Maria" />
                </div>
              </div>


              <div className="sm:col-span-3">
                <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  Email
                </label>
              </div>


              <div className="sm:col-span-9">
                <input id="af-account-email" type="email" name="email" onChange={ handleChange } value={ formData.email } className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="maria@site.com" />
              </div>


              <div className="sm:col-span-3">
                <label htmlFor="af-account-password" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  Password
                </label>
              </div>


              <div className="sm:col-span-9">
                <div className="space-y-2">
                  <input id="af-account-password" type="password" name="password" onChange={ handleChange }
                    value={ formData.password } className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter password" />
                </div>
              </div>


              <div className="sm:col-span-3">
                <div className="inline-block">
                  <label htmlFor="af-account-phone" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                    Phone
                  </label>
                </div>
              </div>


              <div className="sm:col-span-9">
                <input id="af-account-phone" type="tel" name="number" onChange={ handleChange } value={ formData.number } className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="+x(xxx)xxx-xx-xx" />
              </div>




              <div className="sm:col-span-3">
                <label htmlFor="gender" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  Gender
                </label>
              </div>


              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <label htmlFor="gender" className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                    <input type="radio" name="gender" onChange={ handleChange } className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="gender" value="male" />
                    <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Male</span>
                  </label>

                  <label htmlFor="gender-female" className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                    <input type="radio" name="gender" onChange={ handleChange } className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="gender-female" value="female" />
                    <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Female</span>
                  </label>

                  <label htmlFor="gender-other" className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                    <input type="radio" name="gender" onChange={ handleChange } className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="gender-other" value="other" />
                    <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Other</span>
                  </label>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="af-account-courses" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  Courses
                </label>
              </div>
              <div className="sm:col-span-9">
                <select name="courses" className="w-full rounded-md p-1 shadow-sm focus:outline-none" onChange={ handleChange } required>
                  <option disabled selected>No Course Selected</option>
                  {
                    data.map( ( item, index ) =>
                    {
                      return (
                        <option key={ index } value={ item.cname }>{ item.cname }</option>
                      );
                    } )
                  }
                </select>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="af-account-level" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  Level
                </label>
              </div>
              <div className="sm:col-span-9">
                <select name="level" className="w-full rounded-md p-1 shadow-sm focus:outline-none" onChange={ handleChange } required>
                  <option disabled selected>No Level Selected</option>
                  <option value="Corporate/Industry Level">Corporate/Industry Level</option>
                  <option value="College Level">College Level</option>
                </select>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="af-account-mode" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  Mode
                </label>
              </div>
              <div className="sm:col-span-9">
                <select name="mode" className="w-full rounded-md p-1 shadow-sm focus:outline-none" onChange={ handleChange } required>
                  <option disabled selected>No Mode Selected</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-x-2">
              <button type="button" onClick={ handleRegistrationModal } className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Cancel
              </button>
              <button type="submit" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Save changes
              </button>
            </div>
          </form>
        </div>

      </div >
    </div >
  );
};

export default Registration;