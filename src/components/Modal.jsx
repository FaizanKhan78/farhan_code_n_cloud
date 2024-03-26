import { NavLink } from "react-router-dom";

const Modal = ( { handleModal, data } ) =>
{
    return (
        <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white border z-[80] border-gray-200 rounded-xl shadow-sm pointer-events-auto dark:bg-gray-800 dark:border-gray-700">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h2 className="block text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">{ data?.cname }</h2>
                        <div className="max-w-sm mx-auto">
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                { data?.short_desc }
                            </p>
                        </div>
                        <div className="mt-5">
                            <span className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                                { data?.title }
                            </span>
                        </div>
                    </div>

                    <div className="mt-8 sm:mt-10 divide-y divide-gray-200 dark:divide-gray-700">
                        <div className="flex gap-x-7 py-5 first:pt-0 last:pb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dot"><circle cx="12.1" cy="12.1" r="1" /></svg>

                            <div>
                                <h3 className="font-semibold text-gray-800 text-left dark:text-gray-200">
                                    { data.labelOne.name }
                                </h3>
                                <p className="text-sm text-gray-500">
                                    { data.labelOne.desc }
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-x-7 py-5 first:pt-0 last:pb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dot"><circle cx="12.1" cy="12.1" r="1" /></svg>

                            <div>
                                <h3 className="font-semibold text-left text-gray-800 dark:text-gray-200">
                                    { data.labelTwo?.name }
                                </h3>
                                <p className="text-sm text-gray-500">
                                    { data.labelTwo?.desc }
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-x-7 py-5 first:pt-0 last:pb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dot"><circle cx="12.1" cy="12.1" r="1" /></svg>
                            <div>
                                <h3 className="font-semibold  text-left text-gray-800 dark:text-gray-200">
                                    { data.labelThree?.name }
                                </h3>
                                <p className="text-sm text-gray-500">
                                    { data.labelThree?.desc }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-center gap-x-2 p-4 sm:px-7 border-t dark:border-gray-700">
                    <button type="button" onClick={ handleModal } className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-notifications">
                        Cancel
                    </button>
                    <NavLink to="/contact" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        Enroll Now
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Modal;