import react from "react";

const LandingPage = ()=>{
    return(
        <section className="relative h-[85vh] overflow-hidden">

            <video 
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="src\assets\landing-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 w-full h-full bg-black/30 backdrop-blur-xs z-1"/>

            <div className="relative z-2 flex items-center h-full px-20">
                <div className="text-5xl font-bold -translate-y-30">
                <span className="block text-white">WE DON'T SERVE GIFTS</span>
                <span className="block text-white">WE SERVE HEARTS</span>
            </div>
            </div>
        </section>
        
    );
}

export default LandingPage;