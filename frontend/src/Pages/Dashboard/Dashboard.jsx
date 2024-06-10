import React, { useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import Drawer1 from '../../Components/Drawer';

const Dashboard = () => {

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(!token){
      window.location.href = "/login";
    }
  },[])
  return <Navbar>
  <Drawer1/>
    
  </Navbar>;
};

export default Dashboard;
