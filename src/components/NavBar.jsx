import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
import { useAuth } from '../Hooks/useAuth';
import { toast } from 'react-toastify';

const NavBar = () =>
{
  const { user, setUser } = useAuth();
  const [ registrationModal, setRegistrationModal ] = useState( false );
  const [ loginModal, setLoginModal ] = useState( false );
  function handleLoginModal ()
  {
    setLoginModal( !loginModal );
  }
  const handleRegistrationModal = () =>
  {
    setRegistrationModal( !registrationModal );
  };
  const handleLogout = () =>
  {
    toast.success( "Logout Successful", {
      theme: 'colored',
      autoClose: 2000,
      position: "top-left",
    } );
    setUser( null );
  };
  return (
    <>
      {/* ========== HEADER ========== */ }
      <header className="sticky top-0 z-50 w-full text-sm bg-white dark:bg-[#000e14] ">
        <nav className="relative max-w-[85rem] w-full mx-auto px-4 py-3 md:flex md:justify-between md:items-center md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <img src='/images/cnc.png' alt='logo' className='w-1/4' />
            <div className="md:hidden">
              <button type="button" className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
          </div>

          <div id="navbar-collapse-with-animation" className="hs-collapse hidden md:block">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pr-7">
              <NavLink to="/" className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500">Home</NavLink>
              <NavLink to="/courses" className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500">Courses</NavLink>
              { !user ?
                <>
                  <NavLink className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" onClick={ handleLoginModal }>Login</NavLink>
                  <NavLink className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" onClick={ handleRegistrationModal }>Registration</NavLink>
                </> :
                <NavLink className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" onClick={ handleLogout }>
                  Logout
                </NavLink> }

              { user && user.isAdmin && <NavLink to="/admin" className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500">Admin</NavLink> }
              { user && <NavLink className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" to='/user'>User</NavLink> }
              { user && <span className="sm:col-span-1 whitespace-nowrap font-semibold dark:text-white">{ user?.name }</span> }
              {/* <NavLink to="/blog" className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500">Blog</NavLink>
              <NavLink to="/resource" className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500">Resource</NavLink> */}
              <NavLink to="/contact" className="py-2 px-3 whitespace-nowrap inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Contact Us.</NavLink>
              { user && <img className="inline-block size-[62px] rounded-full object-cover" src={ `http://localhost:8000/images/${ user?.file }` } alt="Image Description" /> }
            </div>
          </div>
        </nav>
      </header>
      {/* <button type="button" className="hs-dark-mode-active:hidden block hs-dark-mode group  items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" data-hs-theme-click-value="dark">
        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
      </button>
      <button type="button" className="hs-dark-mode-active:block hidden hs-dark-mode group  items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" data-hs-theme-click-value="light">
        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 8a2 2 0 1 0 4 4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
      </button> */}
      {/* ========== END HEADER ========== */ }
      { registrationModal && <Registration handleRegistrationModal={ handleRegistrationModal } /> }
      { loginModal && <Login handleLoginModal={ handleLoginModal } /> }
    </>
  );
};

export default NavBar;
