// src/Layout/Layout.jsx
import NavBarComp from "../NavBar.jsx";
import Hero from "../components/Hero.jsx";
import HowitWork from "../components/HowitWork.jsx";
import Features from "../components/Features.jsx";
import Footer from "../components/Footer.jsx";

function Layout() {
  return (
    <div className={"flex flex-col  min-h-full bg-[#fff]"}>
      <NavBarComp />
      <div className={"container  mx-auto"}>
        <Hero />
        <HowitWork />
        <Features />
        <div className="divider"></div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
