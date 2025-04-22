import React from 'react';

const Navbar = ({ isLoggedIn, userName, onLoginClick, onSignupClick, onLogout }) => {
  return (
    <nav className="bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg border-b border-gray-800 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                PixelMind
              </span>
            </div>
            {isLoggedIn ? (
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                    Dashboard
                  </a>
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Chat History
                  </a>
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Settings
                  </a>
                </div>
              </div>
            ) : (
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Features
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Pricing
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </a>
                </div>
              </div>
            )}
          </div>
          
          {isLoggedIn ? (
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3 relative">
                  <div>
                    <button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                        {userName.charAt(0).toUpperCase()}
                      </div>
                      <span className="ml-2 text-gray-300">{userName}</span>
                      <i className="fas fa-chevron-down ml-2 text-gray-400 text-xs"></i>
                    </button>
                  </div>
                </div>
                <button
                  onClick={onLogout}
                  className="ml-4 bg-gray-700 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <i className="fas fa-sign-out-alt mr-2"></i>
                  Sign out
                </button>
              </div>
            </div>
          ) : (
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  onClick={onLoginClick}
                  className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Sign in
                </button>
                <button
                  onClick={onSignupClick}
                  className="ml-4 bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Sign up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;