import React from 'react';

import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Features from "./components/Features/Features";
import {ItemList} from "./components/List";
import { Box } from '@primer/react';



export const Landing = () => (
  <>

          <Navbar />
      <Features/>

      <ItemList/>
      <Footer />
  </>
);
