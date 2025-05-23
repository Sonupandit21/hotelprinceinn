import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/logo1.jpg';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersOpen: false,
      messagesOpen: false,
      bookingsOpen: false, // Added for bookings dropdown
    };
  }

  toggleDropdown = (menu) => {
    this.setState((prevState) => ({
      [menu]: !prevState[menu],
    }));
  };

  render() {
    const { usersOpen, messagesOpen, bookingsOpen } = this.state;

    return (
      <div className="min-h-screen bg-white border-r border-gray-200 p-4 mb-2">
        {/* Logo and Title */}
        <div className="flex items-center mb-8">
          <Link to="/Dashboard">
            <img src={logo1} alt="Hotel Logo" className="w-10 h-10 mr-2" />
          </Link>
          <Link to="/Dashboard" className="font-bold text-lg">
            HOTEL PRINCEINN
          </Link>
        </div>

        {/* Section Title */}
        <div className="text-sm text-gray-500 mb-4 font-semibold">MAIN MENU</div>

        {/* Navigation Menu */}
        <nav className="space-y-2 text-gray-700">
          {/* Users Dropdown */}
          <div>
            <button
              onClick={() => this.toggleDropdown('usersOpen')}
              className="flex items-center w-full text-left px-2 py-2 hover:bg-gray-100 rounded"
            >
              <span className="mr-2">👤</span>
              <span className="flex-1">Users</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  usersOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {usersOpen && (
              <div className="ml-6 mt-2 space-y-1 text-gray-600 text-sm">
                <Link
                  to="/users_all"
                  className="block px-2 py-1 rounded hover:bg-gray-200 transition-colors"
                >
                  All Users
                </Link>
              </div>
            )}
          </div>

          {/* Client Message Dropdown */}
          <div>
            <button
              onClick={() => this.toggleDropdown('messagesOpen')}
              className="flex items-center w-full text-left px-2 py-2 hover:bg-gray-100 rounded"
            >
              <span className="mr-2">💬</span>
              <span className="flex-1">Client Message</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  messagesOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {messagesOpen && (
              <div className="ml-6 mt-2 space-y-1 text-gray-600 text-sm">
                <Link
                  to="/client_messages"
                  className="block px-2 py-1 rounded hover:bg-gray-200 transition-colors"
                >
                  All Client Messages
                </Link>
              </div>
            )}
          </div>

          {/* Bookings Dropdown */}
          <div>
            <button
              onClick={() => this.toggleDropdown('bookingsOpen')}
              className="flex items-center w-full text-left px-2 py-2 hover:bg-gray-100 rounded"
            >
              <span className="mr-2">📦</span>
              <span className="flex-1">Bookings</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  bookingsOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {bookingsOpen && (
              <div className="ml-6 mt-2 space-y-1 text-gray-600 text-sm">
                <Link
                  to="/BookingHistory"
                  className="block px-2 py-1 rounded hover:bg-gray-200 transition-colors"
                >
                  All Bookings
                </Link>
                {/* <Link
                  to="/bookings/pending"
                  className="block px-2 py-1 rounded hover:bg-gray-200 transition-colors"
                >
                  Pending Bookings
                </Link> */}
              </div>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
