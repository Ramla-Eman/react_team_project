import React from "react";
// components
import Hero from "../components/Hero";
import HomeTodays from "../components/HomeTodays";
import Categories from "../components/Categories";
import ThisMonth from "../components/ThisMonth";
import HomeBanner from "../components/HomeBanner";
import OurProducts from "../components/OurProducts";
import HomeFeautered from "../components/HomeFeautered";
import ServicesBagdges from "../components/ServicesBagdges";

const Home = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto pt-6 px-6 py-5">
        {/* Hero */}
        <Hero/>
        {/* Today's */}
        <HomeTodays/>
        {/* categories */}
        <Categories/>
        {/* This Month */}
        <ThisMonth/>
        {/* Home banner */}
        <HomeBanner/>
        {/* Our products */}
        <OurProducts/>
        {/* Home Feautered */}
        <HomeFeautered/>
        {/* Services Badge */}
        <ServicesBagdges/>
      </div>
    </section>
  );
};

export default Home;
