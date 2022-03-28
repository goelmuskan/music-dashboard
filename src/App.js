import React from "react";
import PhotoPage from "./component/PhotoPage";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import DashboardPage1 from './component/DashboardPage1';
import DashboardPage2 from './component/DashboardPage2';
import DashboardPage3 from './component/DashboardPage3';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<PhotoPage />} />
        <Route path="/Dashboard1" element={<DashboardPage1/>} />
        <Route path="/Dashboard2" element={<DashboardPage2/>} />
        <Route path="/Dashboard3" element={<DashboardPage3/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;