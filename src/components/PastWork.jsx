import react from "react";
import NavBar from "./Navbar";
import PastSamples from "./PastSamples.jsx";
import Footer from "./Footer.jsx";
import PastClients from "./PastClients.jsx";

const PastWorks = () => {
  return (
    <>
      <NavBar />
      <div className="h-[10vh]" />
      <PastClients/>
      <PastSamples />
      <div className="h-[15vh]" />
      <Footer/>
    </>
  );
};

export default PastWorks;
