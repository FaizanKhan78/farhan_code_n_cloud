import { useAuth } from "../Hooks/useAuth";
import axios from 'axios';
import { toast } from 'react-toastify';
import { data } from "../data/data";

const Edit = ( { handleEditModal } ) =>
{
  const { user, setUser } = useAuth();
  const handleChange = ( e ) =>
  {
    const { name, value } = e.target;
    setUser( { ...user, [ name ]: value } );
    // console.log( { ...user, [ name ]: value } );
  };
  async function handleSubmit ()
  {
    try
    {
      await axios.patch( 'http://localhost:8000/api/auth/edit', user );
      toast.success( "Edited Successfully", {
        theme: "colored",
        autoClose: 2000,
        position: "top-left",
      } );
      handleEditModal();
    } catch ( error )
    {
      console.log( error );
    }
  }
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-full max-w-md p-8 mx-auto my-6 bg-white rounded-md shadow-lg">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={ handleEditModal }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Edit User</h2>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-semibold text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  value={ user?.name }
                  onChange={ handleChange }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-semibold text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={ user?.email }
                  onChange={ handleChange }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-semibold text-gray-600">Number</label>
                <input
                  type="tel"
                  name="number"
                  value={ user?.number }
                  onChange={ handleChange }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-semibold text-gray-600">Level</label>
                <select name="level" value={ user?.level } onChange={ handleChange } className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 mt-1">
                  <option value="Corporate/Industry Level">Corporate/Industry Level</option>
                  <option value="College Level">College Level</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-semibold text-gray-600">Courses</label>
                <select name="mode" value={ user?.mode } onChange={ handleChange } className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 mt-1">
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-semibold text-gray-600">Courses</label>
                <select name="courses" value={ user?.courses } onChange={ handleChange } className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 mt-1">
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
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                onClick={ handleSubmit }
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Edit;