import React from 'react';
import Navigation from '../../Components/Common/Navigation';
import SideBar from '../../Components/Admin/SideBar';
import AddUserMain from '../../Components/Admin/AddUserMain';

function addUser() {
  return (
    <>
      <Navigation />
      <SideBar main={<AddUserMain />} />
    </>
  );
}

export default addUser;
