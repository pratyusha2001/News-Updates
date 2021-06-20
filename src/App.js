import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from './components/SideBar';

function App() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div>
      <SideBar/> 
    </div>
  );
}

export default App;
