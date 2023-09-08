import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";
function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
