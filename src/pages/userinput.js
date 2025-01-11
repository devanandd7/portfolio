import { useState, useEffect } from "react";
import React from 'react'

const Userinput = () => {
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
        formData.links.forEach((link, index) => data.append(`links[${index}]`, link));
        data.append("skill_Name", formData.skill_Name);
        data.append("skill_Specific_Name", formData.skill_Specific_Name);
        data.append("project_name", formData.project_name);
        data.append("project_bio", formData.project_bio);
        data.append("contact_link", formData.contact_link);
        data.append("project_link", formData.project_link);
        data.append("contact_name", formData.contact_name);
        data.append("contact_email", formData.contact_email);
    
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
            links: ["", "", "", "", ""],
            skill_Name: "",
            skill_Specific_Name: "",
            project_name: "",
            project_bio: "",
            contact_link: "",
            project_link: "",
            contact_name: "",
            contact_email: "",
          });
          setImage({
            image1: null,
            skill_Image: null,
            certificates_image: null,
            project_Image: null,
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
              accept="image/*"
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
            {formData.links.map((link, index) => (
              <input
                key={index}
                type="text"
                name={`links${index + 1}`}
                value={link}
                onChange={handleInputChange}
                placeholder={`Link ${index + 1}`}
                required
              />
            ))}
            <input
              type="file"
              name="skill_Image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            <input
              type="text"
              name="skill_Name"
              value={formData.skill_Name}
              onChange={handleInputChange}
              placeholder="Skill Name"
              required
            />
            <input
              type="text"
              name="skill_Specific_Name"
              value={formData.skill_Specific_Name}
              onChange={handleInputChange}
              placeholder="Skill Specific Name"
              required
            />
            <input
              type="file"
              name="certificates_image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            <input
              type="file"
              name="project_Image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            <input
              type="text"
              name="project_name"
              value={formData.project_name}
              onChange={handleInputChange}
              placeholder="Project Name"
              required
            />
            <input
              type="text"
              name="project_bio"
              value={formData.project_bio}
              onChange={handleInputChange}
              placeholder="Project Bio"
              required
            />
            <input
              type="text"
              name="project_link"
              value={formData.project_link}
              onChange={handleInputChange}
              placeholder="Project Link"
              required
            />
            <input
              type="text"
              name="contact_link"
              value={formData.contact_link}
              onChange={handleInputChange}
              placeholder="Contact Link"
              required
            />
            <input
              type="text"
              name="contact_name"
              value={formData.contact_name}
              onChange={handleInputChange}
              placeholder="Contact Name"
              required
            />
            <input
              type="text"
              name="contact_email"
              value={formData.contact_email}
              onChange={handleInputChange}
              placeholder="Contact Email"
              required
            />
    
            <button type="submit">Add User</button>
          </form>
    
          <h2>Users:</h2>
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                <div>
                  {user.name}, {user.bio}, {user.links.join(", ")}
                  {user.skill_Name}, {user.skill_Specific_Name}
                  {user.project_name}, {user.project_bio}, {user.project_link}
                  {user.contact_link}, {user.contact_name}, {user.contact_email}
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

export default Userinput