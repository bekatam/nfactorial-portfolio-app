import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import AboutMe from './Components/AboutMe';
import Experience from './Components/Experience';
import MyProjects from './Components/MyProjects';
import Hello from './Components/Contacts';
import Footer from './Components/Footer';
import NavigationIcon from '@mui/icons-material/Navigation';

function App() {
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };
  const showButton = () => {
    if(window.scrollY > 300) {
      document.getElementsByClassName('scroll')[0].className = 'scroll scroll_active';
    }
    else {
      document.getElementsByClassName('scroll')[0].className = 'scroll';
    }
  }
  window.addEventListener('scroll', showButton);
  return (
    <>
      <Nav/>
      <Main/>
      <AboutMe/>
      <Experience/>
      <MyProjects/>
      <Hello/>
      <Footer/>
      <button className="scroll" onClick={goToTop}><NavigationIcon className='navigation'/></button>
    </>
  );
}

export default App;
