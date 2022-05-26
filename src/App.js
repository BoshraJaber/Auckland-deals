import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home'
import HeaderImage from './components/Header/HeaderImage'
import Card from "./components/Main/Cards"
// import { useSelector, useDispatch } from 'react-redux';

import Banner from './components/Header/Banner';
import NavBar from './components/Header/NavBar';


function App() {
  // const state = useSelector((state) => {
  //   console.log(state.cityReducer);
  //   return {
  //     city: state.cityReducer.name
  //   }
  // });


  return (
    <div className="App">
      <Banner />
      <NavBar />
      <HeaderImage />
      <Card />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city_name" element={<Banner />} />
      </Routes>
    </div>
  );
}

export default App;
