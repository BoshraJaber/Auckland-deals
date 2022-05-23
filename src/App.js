import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home'


import Banner from './components/Header/Banner'


function App() {
  return (
    <div className="App">
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city_name" element={<Banner />} />
      </Routes>
    </div>
  );
}

export default App;
