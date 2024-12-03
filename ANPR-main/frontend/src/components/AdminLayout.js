import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Admin_Sidebar/Admin_Sidebar";
import AdminList from "./AdminList/AdminList";
import Admin_Users from "./Admin_Users";
import Dashboard from "./Dashboard/Dashboard";

const AdminLayout = () => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <div className="content" style={{ flex: 1, padding: "16px" }}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin_users" element={<Admin_Users />} />
        <Route path="/adminlist" element={<AdminList />} />
        {/* Redirect to AdminList as default route */}
        <Route path="*" element={<Navigate to="/adminlayout/adminlist" />} />
      </Routes>
    </div>
  </div>
);

export default AdminLayout;
