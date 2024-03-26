import { Router } from 'lucide-react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cards from './Cards';
import NavBar from './NavBar';
import HeroForms from './HeroForms';
import About from './About';
import Clients from './Clients';
import FAQ from './FAQ';
import Footer from './Footer';
import Blogs from './Blogs';
import ErrorPage from './ErrorPage';
import ContactUs from './Contact';
import BlogArticle from './BlogPage';
import Help from './Help';
import Resources from './Resources';
import Carousal from './Carousal';

import Testimonials from './Testimonials';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../Hooks/useAuth';
import Admin from './Admin';
import User from './User';

const AllRoutes = () =>
{

    const { user } = useAuth();
    console.log( user );

    const location = useLocation();

    useEffect( () =>
    {
        window.HSStaticMethods.autoInit();
    }, [ location.pathname ] );

    return (
        <>

            <Routes>

                <Route path="/" element={
                    <>
                        <NavBar />
                        {/* <Offer /> */ }
                        <HeroForms />
                        <Carousal />
                        <About />
                        <Testimonials />
                        {/* <Cards /> */ }
                        <Clients />
                        <Help />
                        {/* <FAQ /> */ }
                        <Footer />
                    </>
                } />

                <Route path='/user'
                    element={
                        <>
                            <NavBar />
                            <User />
                            <Footer />
                        </>
                    }
                />
                <Route path='*' element={ <ErrorPage /> } />

                <Route path='/blog' element={ <><NavBar /> <Blogs /> <Footer /></> } />
                <Route path='/contact' element={
                    <>
                        <NavBar />
                        <ContactUs />
                        <FAQ />
                        <Footer />
                    </> }
                />

                <Route path="/blogArticle" element={
                    <>
                        <NavBar />
                        <BlogArticle />
                        <Footer />
                    </>

                } />

                <Route path="/courses" element={
                    <>
                        <NavBar />
                        <Cards />
                        <Footer />
                    </>

                } />

                { user && user.isAdmin && <Route path="/admin" element={
                    <>
                        <NavBar />
                        <Admin />
                        <Footer />
                    </>

                } /> }
            </Routes>
        </>
    );
};

export default AllRoutes;