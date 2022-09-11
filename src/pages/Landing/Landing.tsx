import React from 'react';
import { Banner,  } from './components';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Features from "./components/Features/Features";

export const Landing = () => (
  <>
    <Navbar />
    <Features/>

    <Footer />
  </>
);
