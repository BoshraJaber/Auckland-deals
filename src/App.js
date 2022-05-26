import './App.css';
import { Routes, Route } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux';

import Banner from './components/Header/Banner';
import NavBar from './components/Header/NavBar';
import HeaderImage from './components/Header/HeaderImage'
import Home from './components/Main/Home';


function App() {
  // const state = useSelector((state) => {
  //   console.log(state.cityReducer);
  //   return {
  //     city: state.cityReducer.name
  //   }
  // });


  return (
    <>
      <Banner />
      <NavBar />
      <HeaderImage />
      <Home />
    </>
  );
}

export default App;
