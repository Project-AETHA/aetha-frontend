import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../contexts/LoginContext";
import CircularProgress from "@mui/material/CircularProgress";

const UsersList = () => {
  const { authToken } = useContext(LoginContext)
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/user/all-users", {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });

        if (res.status === 200) {
          setUsers(res.data.content);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [authToken]);

  return (
    <div>
      <h1>Users List</h1>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id} style={{marginBottom: 20}}>
              <strong>Username:</strong> {user.username} <br />
              <strong>First Name:</strong> {user.firstname} <br />
              <strong>Last Name:</strong> {user.lastname} <br />
              <strong>Gender:</strong> {user.gender} <br />
              <strong>Role:</strong> {user.role} <br />
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
