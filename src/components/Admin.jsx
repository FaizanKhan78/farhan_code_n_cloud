import { useEffect, useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import { Trash2 } from 'lucide-react';
import axios from "axios";
import { toast } from 'react-toastify';
import Edit from "./Edit";

const Admin = () =>
{
  const { user, allUsersData, getAllUsersData, setAllUsersData } = useAuth();
  useEffect( () =>
  {
    getAllUsersData();
  }, [] );
  const handleDeleteUser = async ( id, file, name ) =>
  {
    console.log( id );
    try
    {
      const res = await axios.delete( `http://localhost:8000/api/auth/delete/${ id }/${ file }`, );
      console.log( res );
      toast.success( `${ name } deleted successfully`, {
        theme: 'colored',
        autoClose: 2000,
        position: "top-left",
      } );
      const AllUser = allUsersData.filter( ( users ) =>
      {
        return users._id !== id;
      } );

      setAllUsersData( AllUser );
    } catch ( error )
    {
      console.log( error );
    }
  };

  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Card --> */ }
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-slate-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Profile
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Name
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Number
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Course
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Level
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Mode
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Enrollment Date
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Operation
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {
                    allUsersData && allUsersData.map( ( users, index ) =>
                    {
                      return (
                        <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800" key={ index }>
                          <td className="size-px whitespace-nowrap align-top">
                            <a className="block p-6" href="#">
                              <div className="flex items-center gap-x-4">
                                <img className="inline-block size-[38px] rounded-full object-cover" src={ `http://localhost:8000/images/${ users.file }` } alt="Image Description" />
                              </div>
                            </a>
                          </td>
                          <td className="size-px whitespace-nowrap align-top">
                            <a className="block p-6" href="#">
                              <div className="flex items-center gap-x-3">
                                <div className="grow">
                                  <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{ users.name }</span>
                                  <span className="block text-sm text-gray-500">{ users.email }</span>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="h-px w-72 min-w-72 align-top">
                            <a className="block p-6" href="#">
                              <span className=" text-sm font-semibold text-gray-800 dark:text-gray-200">{ users.number }</span>
                            </a>
                          </td>
                          <td className="size-px whitespace-nowrap align-top">
                            <a className="block p-6" href="#">
                              <span className="text-sm text-gray-600 dark:text-gray-400">{ users.courses }</span>
                            </a>
                          </td>
                          <td className="size-px whitespace-nowrap align-top">
                            <a className="block p-6" href="#">
                              <span className="text-sm text-gray-600 dark:text-gray-400">{ users.level }</span>
                            </a>
                          </td>
                          <td className="size-px whitespace-nowrap align-top">
                            <a className="block p-6" href="#">
                              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                                { users.mode.charAt( 0 ).toUpperCase() + users.mode.slice( 1 ) }
                              </span>
                            </a>
                          </td>
                          <td className="size-px whitespace-nowrap align-top">
                            <a className="block p-6" href="#">
                              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                { user?.createdAt.split( 'T' )[ 0 ].split( '-' ).reverse().join( '-' ) }
                              </span>
                            </a>
                          </td>
                          <td className="size-px whitespace-nowrap align-top">
                            <a className=" p-6 cursor-pointer" onClick={ () => handleDeleteUser( users._id, users.file, users.name ) }>
                              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                <Trash2 />
                              </span>
                            </a>
                          </td>
                        </tr>
                      );
                    } )
                  }
                </tbody>
              </table>
              {/* <!-- End Table -->

          <!-- Footer --> */}
              {/* <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                <div className="max-w-sm space-y-3">
                  <select className="py-2 px-3 pe-9 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option selected>5</option>
                    <option>6</option>
                  </select>
                </div>

                <div>
                  <div className="inline-flex gap-x-2">
                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                      Prev
                    </button>

                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Next
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                  </div>
                </div>
              </div> */}
              {/* <!-- End Footer --> */ }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;