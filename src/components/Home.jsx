import { useState } from 'react'
import NavBar from "./Navbar.jsx";
import EnquireForm from "./Enquire.jsx";
import LandingPage from "./Landing.jsx";
import OfferPage from "./Offer.jsx";
import Footer from "./Footer.jsx";
import CustomGifts from "./CustomRequests.jsx";

const Home= ()=> {
  return (
    <>
    <NavBar/>
    <LandingPage/>
    <div className="h-[20vh]" />
    {/* This is just a filler so that the next element starts from after the 100vh */}
    <OfferPage/>
    <div className="h-[8vh]" />
    <EnquireForm/>
    <div className="h-[8vh]" />
    <CustomGifts/>
    <div className="h-[20vh]" />
    <Footer/>
    </>
  )
}

export default Home;
