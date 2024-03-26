import { useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import Edit from "./Edit";
import { FilePenLine } from 'lucide-react';

const User = () =>
{
  const { user } = useAuth();
  const [ editModal, setEditModal ] = useState( false );
  const handleEditModal = () =>
  {
    setEditModal( !editModal );
  };
  return (
    <>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        <div className="text-center">
          <img src={ `http://localhost:8000/images/` + user?.file } alt="User Avatar" className="w-24 object-cover h-24 mx-auto rounded-full" />
          <h2 className="mt-4 text-xl font-semibold">{ user?.name }</h2>
          <p className="text-gray-600">{ user?.email }</p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">User Details</h3>
          <div className="mt-4">
            <p><span className="font-semibold">Phone:</span> { user?.number }</p>
            <p><span className="font-semibold">Course:</span> { user?.courses }</p>
            <p><span className="font-semibold">Level:</span> { user?.level }</p>
            <p><span className="font-semibold">Mode:</span> { user?.mode.charAt( 0 ).toUpperCase() + user?.mode.slice( 1 ) }</p>
            <p><span className="font-semibold">Enrollment Date:</span> { user?.createdAt.split( 'T' )[ 0 ].split( '-' ).reverse().join( '-' ) }</p>
            <button type="button" onClick={ handleEditModal } className="text-white flex justify-center items-center gap-2 w-full mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><FilePenLine /> Edit</button>
          </div>
        </div>
      </div>
      { editModal && <Edit handleEditModal={ handleEditModal } /> }
    </>
  );
};

export default User;