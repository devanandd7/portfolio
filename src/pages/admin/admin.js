import { useState, useEffect } from "react";
import React from 'react'

const userinput = () => {
    const [formData, setFormData] = useState({
        name: "",
        bio: "",
        links: ["", "", "", "", ""], // Using an array for links
        skill_Name: "",
        skill_Specific_Name: "",
        project_name: "",
        project_bio: "",
        contact_link: "",
        project_link: "",
        contact_name: "",
        contact_email: "",
      });
      const [image, setImage] = useState({
        image1: null,
        skill_Image: null,
        certificates_image: null,
        project_Image: null,
      });
      const [users, setUsers] = useState([]);
    
      useEffect(() => {
        fetchUsers();
      }, []);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith("links")) {
          const index = parseInt(name.split("links")[1]) - 1;
          const newLinks = [...formData.links];
          newLinks[index] = value;
          setFormData({ ...formData, links: newLinks });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
    
      const handleImageChange = (e) => {
        const { name, files } = e.target;
        if (files && files[0]) {
          setImage({ ...image, [name]: files[0] });
        }
      };
    
      const fetchUsers = async () => {
        const response = await fetch("/api/users");
        const data = await response.json();
        if (response.ok) setUsers(data.data);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const data = new FormData();
        data.append("name", formData.name);
        data.append("bio", formData.bio);
       
    
        if (image.image1) {
          data.append("image1", image.image1);
        }
        if (image.skill_Image) {
          data.append("skill_Image", image.skill_Image);
        }
        if (image.certificates_image) {
          data.append("certificates_image", image.certificates_image);
        }
        if (image.project_Image) {
          data.append("project_Image", image.project_Image);
        }
    
    console.log(data);
    
        const response = await fetch("/api/users", {
          method: "POST",
          body: data,
        });
    
        if (response.ok) {
          setFormData({
            name: "",
            bio: "",
           
          });
          setImage({
            image1: null,
          
          });
          fetchUsers();
        } else {
          console.error("Failed to add user");
        }
      };
    
      return (
        <div>
          <h1>User Details</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              name="image1"
              accept=".pdf,.doc,.docx,image/*"
              onChange={handleImageChange}
              required
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
            />
            <input
              type="text"
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
            {users.map((user) => (
              <li key={user._id}>
                <div>
                  {user.name}, {user.bio}, 
                 
                </div>
                {user.image && (
                  <img
                    src={user.image} // Assuming user.image is accessible via `/uploads/`
                    alt={`${user.name}'s profile`}
                    style={{ width: "100px", height: "100px" }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default userinput