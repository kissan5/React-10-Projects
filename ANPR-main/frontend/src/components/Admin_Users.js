import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';
import AddUserModal from './AddUserModal/AddUserModal'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';

const Admin_Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users');
                setUsers(response.data);
            } catch (error) {
                setError('Failed to fetch users');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:5000/delete_user/${id}`);
            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
        } catch (error) {
            setError('Failed to delete user');
        }
    };

    const refreshUsers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mt-4">
            <h2>Users</h2>
            <button className="btn btn-primary mb-3" onClick={() => setShowModal(true)}>
                <FaPlus /> Add New User
            </button>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(user._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Add User Modal */}
            <AddUserModal showModal={showModal} handleClose={() => setShowModal(false)} refreshUsers={refreshUsers} />
        </div>
    );
};

export default Admin_Users;
