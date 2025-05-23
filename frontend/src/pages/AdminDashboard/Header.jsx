import React, { Component } from 'react';
import { Bell, ChevronDown, Search } from 'lucide-react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };

  render() {
    return (
      <div className="flex items-center justify-between p-4 bg-white shadow-sm">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-96">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm text-gray-700 ml-2 w-full"
          />
        </div>

        {/* Notification Icon */}
        <button className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <Bell className="w-5 h-5 text-gray-700" />
          {/* Red dot */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Profile Dropdown */}
        <div className="relative flex items-center gap-2 cursor-pointer" onClick={this.toggleDropdown}>
          <img
            src="/profile.png" // Replace with actual image
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-900">Super Admin</span>
          <ChevronDown className="w-4 h-4 text-gray-600" />

          {this.state.dropdownOpen && (
            <div className="absolute top-12 right-0 w-40 bg-white shadow-lg rounded-md p-2 z-50">
              {/* <p className="text-sm p-2 hover:bg-gray-100 rounded">Profile</p> */}
              <p className="text-sm p-2 hover:bg-gray-100 rounded">Logout</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
