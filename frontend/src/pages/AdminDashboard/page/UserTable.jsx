import React, { useState, useEffect } from "react";

const UserTable = () => {
  const [users, setUsers] = useState([]);         // State to store fetched users
  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [loading, setLoading] = useState(true);   // Loading state
  const [error, setError] = useState(null);       // Error state

  useEffect(() => {
    // Fetch users from API on component mount
    fetch("http://localhost:5000/api/users/get-user")
      .then(async (res) => {
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Failed to fetch users");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);   // Assuming data is an array of users
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter users by search inputs
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchName.toLowerCase()) &&
      user.email.toLowerCase().includes(searchEmail.toLowerCase())
  );

  if (loading) {
    return <div className="p-6">Loading users...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by Name ..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="p-2 border rounded w-full md:w-1/2"
        />
        <input
          type="text"
          placeholder="Search by Email ..."
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          className="p-2 border rounded w-full md:w-1/2"
        />
      </div>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">ID</th>
              <th className="p-2">NAME</th>
              <th className="p-2">EMAIL</th>
              <th className="p-2">Phone</th>
              <th className="p-2">ROLE</th>
                          </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id} className="border-t hover:bg-gray-50">
                  <td className="p-2">{user.id}</td>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.Phone}</td>
                  <td className="p-2">{user.role}</td>
                                 </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
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

export default UserTable;
