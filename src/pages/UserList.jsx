import { Ban, UserRoundPen } from "lucide-react";
import React, { useState } from "react";
import KPIBox from "../components/KPIBox";

const UserList = () => {
  // Dummy data
  let userData = [
    {
      user_id: 1,
      username: "ayush4",
      name: "Ayush ",
      email: "ayush@example.com",
      ban: false,
    },
    {
      user_id: 2,
      username: "harish",
      name: "Harish",
      email: "harish@example.com",
      ban: false,
    },
    {
      user_id: 3,
      username: "ashish",
      name: "Ashish",
      email: "ashish@example.com",
      ban: false,
    },
    {
      user_id: 4,
      username: "subham",
      name: "Subham",
      email: "subham@example.com",
      ban: false,
    },
  ];

  const [users, setUsers] = useState(userData);

  // Ban function logic
  const banUser = (user_id) => {
    const updatedUsers = users.map((user) => {
      if (user.user_id === user_id) {
        return { ...user, ban: true };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  // edit user currently editing name only
  const editUser = (user_id) => {
    const updatedUsers = users.map((user) => {
      if (user.user_id === user_id) {
        return { ...user, name: "Updated Name" };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users Listing</h1>
      <div className="flex gap-6 flex-wrap my-6">
        <KPIBox heading="Total Users:" data="1000" profit="-25" />
        <KPIBox heading="Users (24h):" data="150" profit="+25" />
      </div>

      <div className="overflow-x-auto sm:mx-0  -mx-8">
        <table className="w-full table-auto    sm:shadow-lg my-5 bg-white">
          <thead className="text-white ">
            <tr className="bg-teal-400  rounded-xl mb-2 ">
              <th className="p-3 text-left">User ID</th>
              <th className="p-3 text-left">Username</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="flex-1 sm:flex-none">
            {users.map((user) => (
              <tr
                key={user.user_id}
                className={` ${user.ban ? "text-red-500" : ""}`}
              >
                <td className="py-2 px-4 border-b">{user.user_id}</td>
                <td className="py-2 px-4 border-b">{user.username}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 flex gap-6">
                  <button
                    className="text-red-500  w-4 h-6"
                    onClick={() => banUser(user.user_id)}
                  >
                    <Ban />
                  </button>
                  <button
                    className="text-blue-500 w-4 h-6"
                    onClick={() => editUser(user.user_id)}
                  >
                    <UserRoundPen />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
