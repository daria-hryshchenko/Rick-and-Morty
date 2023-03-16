import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from 'auth/AuthContext';
import Logout from './Logout/Logout';

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between bg-gray-200 w-full p-4">
      {user?.displayName ? <Logout /> : <div>Hi</div>}
    </div>
  );
};

export default Navbar;
