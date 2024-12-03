import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // Import the CSS file

const Dashboard = () => {
  const [admin, setAdmin] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminData = async () => {
      const adminData = JSON.parse(localStorage.getItem("admins"));
      if (adminData) {
        setAdmin(adminData);
        setFormData({ name: adminData.name, email: adminData.email });
      } else {
        navigate("/adminlayout/dashboard"); // Redirect if no admin data
      }
    };
    fetchAdminData();
  }, [navigate]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:5000/update_admin", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: admin._id, ...formData }),
      });

      if (response.ok) {
        const updatedAdmin = await response.json();
        localStorage.setItem("admins", JSON.stringify(updatedAdmin));
        setAdmin(updatedAdmin);
        setIsEditing(false);
      } else {
        console.error("Failed to update admin data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      {admin && (
        <div>
          <div>
            <p>Name: {isEditing ? <input name="name" value={formData.name} onChange={handleChange} /> : admin.name}</p>
            <p>Email: {isEditing ? <input name="email" value={formData.email} onChange={handleChange} /> : admin.email}</p>
          </div>
          <button onClick={handleEditToggle}>{isEditing ? "Cancel" : "Edit"}</button>
          {isEditing && <button onClick={handleSave}>Save</button>}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
