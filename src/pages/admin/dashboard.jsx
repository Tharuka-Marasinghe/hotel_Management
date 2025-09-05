import React from 'react';
import Navigation from '../../Components/Common/Navigation';
import SideBar from '../../Components/Admin/SideBar';
import DashboardMain from '../../Components/Admin/DashboardMain';

function dashboard() {
  return (
    <>
      <Navigation />
      <SideBar main={<DashboardMain />} />
    </>
  );
}

export default dashboard;
