import { useState } from "react";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";

const SingleCard = ( { elem, color, view } ) =>
{
  const [ toggleModal, setToggleModal ] = useState( false );
  const handleModal = () =>
  {
    setToggleModal( !toggleModal );
  };
  // console.log( color );
  return (
    <>
      <div className="group hover:border-2 hover:border-sky-500 flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]  hover:shadow-red-950 transition ">
        <div className="h-52 flex flex-col justify-center items-center  rounded-t-xl" style={ { background: `#${ color }` } }>
          <svg className="size-28" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="56" height="56" rx="10" fill="white" />
            <defs>
              <linearGradient id="paint0_linear_2204_541" x1="24.734" y1="29.2284" x2="16.1543" y2="44.0429" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0052CC" />
                <stop offset="0.92" stopColor="#2684FF" />
              </linearGradient>
            </defs>
          </svg>
          <img src={ elem?.image } alt="logo" className="w-[20vw] md:w-[10vw] lg:w-[6vw] absolute" />
        </div>
        <div className="p-4 md:p-6">
          <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
            { elem?.type }
          </span>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
            { elem?.cname }
          </h3>
          <p className="mt-3 text-gray-500">
            { elem?.title }
          </p>
        </div>
        <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
          { view && <button onClick={ handleModal } className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
            Learn More
          </button> }
          <NavLink to="/contact" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
            Enroll Now
          </NavLink>
        </div>
      </div >
      { toggleModal && <Modal handleModal={ handleModal } data={ elem } /> }
    </>
  );
};

export default SingleCard;