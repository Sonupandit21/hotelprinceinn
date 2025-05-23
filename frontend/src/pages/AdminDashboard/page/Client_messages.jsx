import React, { useState, useEffect } from "react";

const Client_messages = () => {
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [searchPhone, setSearchPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API on mount
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await fetch("http://localhost:5000/api/bookings");
  //       if (!res.ok) {
  //         throw new Error("Failed to fetch bookings");
  //       }
  //       const data = await res.json();

  //       // Assuming data is an array of bookings
  //       setUsers(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/api/bookings");
        if (!res.ok) {
          throw new Error("Failed to fetch bookings");
        }
        const data = await res.json();
        setUsers(data.bookings || []);  // Important: extract bookings array here
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchUsers();
  }, []);
  

  // Filter users based on search
  const filteredUsers = users.filter(
    (user) =>
      (user.fullName?.toLowerCase().includes(searchName.toLowerCase()) ?? false) &&
      (user.email?.toLowerCase().includes(searchEmail.toLowerCase()) ?? false) &&
      (user.phoneNumber?.includes(searchPhone) ?? false)
  );

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Search Inputs */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by Name ..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="p-2 border rounded w-full md:w-1/3"
        />
        <input
          type="text"
          placeholder="Search by Email ..."
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          className="p-2 border rounded w-full md:w-1/3"
        />
        <input
          type="text"
          placeholder="Search by Phone ..."
          value={searchPhone}
          onChange={(e) => setSearchPhone(e.target.value)}
          className="p-2 border rounded w-full md:w-1/3"
        />
      </div>

      {/* User Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Rooms</th>
              <th className="p-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user._id || user.id} className="border-t hover:bg-gray-50">
                  <td className="p-2">{user._id || user.id}</td>
                  <td className="p-2">{user.fullName}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.phoneNumber}</td>
                  <td className="p-2">{user.rooms}</td>
                  <td className="p-2">{user.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Client_messages;
