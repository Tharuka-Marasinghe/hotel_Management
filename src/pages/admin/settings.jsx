import React from 'react';
import Navigation from '../../Components/Common/Navigation';
import SideBar from '../../Components/Admin/SideBar';
import SettingsMain from '../../Components/Admin/SettingsMain';

function settings() {
  return (
    <>
      <Navigation />
      <SideBar main={<SettingsMain />} />
    </>
  );
}

export default settings;
