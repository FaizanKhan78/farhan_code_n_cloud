import { NavLink } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import image from '../images/mobile-app.svg';

const HeroForms = () =>
{

  return (
    <div className="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <img src='/images/cnc.png' alt='logo' className='w-2/4 block ml-auto mr-auto mt-0 mb-0' />
            <div className="mt-4 md:mb-12 max-w-2xl">
              <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-gray-200">
                <TypeAnimation sequence={ [
                  'JAVA SPRINGBOOT',
                  2000,
                  'MERN DEV',
                  2000,
                  'PYTHON / AI / ML',
                  2000,
                  'AWS CLOUD',
                  2000,
                  'REACT JAVA DEV',
                  2000,
                  'DATA SCIENCE',
                  2000,
                  'FRONTEND DEV',
                  2000,
                  'FULL STACK DEV ',
                  2000,
                  '. NET DEV',
                  2000,
                  'DATA ANALYTICS',
                  2000,
                  'SOFTWARE TESTING',
                  2000,
                ] }
                  speed={ 50 }
                  wrapper="span"
                  repeat={ Infinity }
                />
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Part of Top #5 Coding Insitute's in Pune
              </p>
            </div>
            {/* <!-- End Title -->

        <!-- Blockquote --> */}
            <blockquote className="hidden md:block relative max-w-sm">


              <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                <NavLink to="courses">
                  <button className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    Browse Courses.
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                  </button>
                </NavLink>
              </div>

            </blockquote>
            {/* <!-- End Blockquote --> */ }
          </div>
          {/* <!-- End Col --> */ }
          <img src={ image } />
          {/* <!-- End Col --> */ }
        </div>
        {/* <!-- End Grid --> */ }

      </div>

    </div>
  );
};

export default HeroForms;