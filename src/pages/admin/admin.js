import { useState, useEffect } from "react";
import React from "react";

const Admin = () => {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users");
      if (!response.ok) throw new Error("Failed to fetch users");

      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: formData.name,
      bio: formData.bio,
    };

    if (!data.name || !data.bio) {
      alert("Name and Bio are required!");
      return;
    }

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormData({ name: "", bio: "" });
        fetchUsers();
      } else {
        console.error("Failed to add user");
        alert("Failed to add user");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error submitting data");
    }
  };

  return (
    <div>
      <h1>User Details</h1>
      <form onSubmit={handleSubmit}>
        <input
          style={{ color: "black" }}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <textarea
          style={{ color: "black" }}
          type="textarea"
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          placeholder="Bio"
          required
        />
        <button type="submit">Add User</button>
      </form>

      <h2>Users:</h2>
      <ul>
        {users.length === 0 ? (
          <p>No users available</p>
        ) : (
          users.map((user) => (
            <li key={user._id}>
              {user.name}, {user.bio}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Admin;
