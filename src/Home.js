import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { TiArrowDownThick } from "react-icons/ti";
import { IoMusicalNotes, IoStar } from "react-icons/io5";
import { RiPlayListFill } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";
import { ImShuffle } from "react-icons/im";
import { RxLapTimer } from "react-icons/rx";
import { FaCheck, FaStar } from "react-icons/fa6";



import { useState } from 'react';
import { Button, Container, Form, Nav, Navbar, InputGroup, Row, Col, Carousel, Fade } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './image/logo.png';
import slider from './image/slider.png';
import profile from './image/profile.png';
import playstore from './image/playstore.png';
import appstore from './image/appstore.png';
import women from './image/women.png';
import logo2 from './image/logo2.png';

import Menu from './AllComponent/Menu';
import Poster from './AllComponent/Poster';
import Feature from './AllComponent/Feature';
import Profile from './AllComponent/Profile';
import Plan from './AllComponent/Plan';
import Customer from './AllComponent/Customer';
import Member from './AllComponent/Member';
import Available from './AllComponent/Available';
import Footer from './AllComponent/Footer';

function Home() {
  const [open, setOpen] = useState(false);
  const [cont, setCont] = useState(false);
  const [contant, setContant] = useState(false);


  const option = {
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    }
  }
  return (
    <>

      {/* header start */}

      <Menu></Menu>

      {/* header end */}

      {/* slider Start */}

      <Poster></Poster>
      
      {/* slider end */}



      {/* top feature start*/}

        <Feature></Feature>

      {/* top feature end*/}

      {/* Profile start */}

      <Profile></Profile>

      {/* Profile end */}

      {/* Plan start */}
      
      <Plan></Plan>

      {/* Plan end */}

      {/* Customer start */}

      <Customer></Customer>

      {/* Customer end */}

      {/* members start */}
      <Member></Member>

      {/* members end */}

      {/* Available  start*/}
      
      <Available></Available>

      {/* Available  end*/}

      {/* footer start */}

        <Footer></Footer>

      {/* footer end */}


    </>
  );
}

export default Home;