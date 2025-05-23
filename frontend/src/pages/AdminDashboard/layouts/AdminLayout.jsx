import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Header />
        <div className="p-4">
          <Outlet /> {/* Renders the current nested route component */}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
