import React, { useState } from "react";
import logoImg from "../assets/images/Logo-Vietcombank.jpg";
import VNFlagImg from "../assets/images/Flag_of_Vietnam.png";
import ENFlagImg from "../assets/images/flags/en.png";
import { Outlet } from "react-router-dom";
import { SideMenu } from "./SideMenu";
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const TopBar = () => {
  const [isBranchDropdownOpen, setIsBranchDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);


  const toggleBranchDropdown = () => {
    setIsBranchDropdownOpen(!isBranchDropdownOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gray-50 justify-between flex items-stretch px-4 py-2">
      <div className="flex items-center">
          {/* Hamburger button for sidemenu */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleSideMenu}
            className="text-gray-500 hover:text-gray-700"
          >
            {isSideMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <img src={logoImg} alt="Logo" className="h-10 ml-2" />
        </div>

        <div className="flex items-center">
          {/* Current date */}
          <div className="text-gray-500 mr-4 justify-center items-center">
            Ngày hiện tại
            <div className="text-gray-500 text-center">
              {new Date().toLocaleDateString()}
            </div>
          </div>

          {/* Language button with flag icon only */}
          <button className="text-gray-500 hover:text-gray-700 mr-4">
            <img
              src={VNFlagImg}
              alt="Vietnam"
              className="h-6 w-6 rounded-full"
            />
          </button>

          {/* Branch of the VCB Bank, display the name of the branch */}
          <div className="relative text-gray-500 mr-4">
            <button
              onClick={toggleBranchDropdown}
              className="flex items-center"
            >
              <svg
                className="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7h18M3 12h18M3 17h18"
                />
              </svg>
              Chi nhánh Lâm Đồng - Khách hàng bán lẻ
              <svg
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isBranchDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                <a
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Branch 1
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Branch 2
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Branch 3
                </a>
              </div>
            )}
          </div>

          {/* User button dropdown */}
          <div className="relative text-gray-500">
            <button onClick={toggleUserDropdown} className="flex items-center">
              {/* User button */}
              tiendnd.ido
              <svg
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isUserDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                <a
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Content area with SideMenu and Outlet */}
      <div className="flex h-[calc(100vh-56px)]">
        {/* SideMenu */}
        <SideMenu isOpen={isSideMenuOpen} onClose={toggleSideMenu} />

        {/* Main content area */}
        <div className="flex-grow overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
