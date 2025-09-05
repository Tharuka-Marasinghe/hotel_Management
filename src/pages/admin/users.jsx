import React from 'react';
import Navigation from '../../Components/Common/Navigation';
import SideBar from '../../Components/Admin/SideBar';
import UsersMain from '../../Components/Admin/UsersMain';

function users() {
  return (
    <>
      <Navigation />
      <SideBar main={<UsersMain />} />
    </>
  );
}

export default users;
