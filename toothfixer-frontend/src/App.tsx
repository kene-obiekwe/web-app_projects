import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import AboutUs from './components/about-us';
import PbdCreate from './components/pbd-create';
import CrCreate from './components/cr-create';
import ViewData from './components/view';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/patient-biodata/create" element={<PbdCreate onPbdCreateSuccess={() => {}} />} />
        <Route path="/clinic-record/create" element={<CrCreate />} />
        <Route path="/patient-records/view" element={<ViewData />} />
      </Routes>
    </Router>
  );
};

export default App;
