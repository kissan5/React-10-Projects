import React, { useState } from 'react';
import axios from 'axios';
import './AddUserModal.css'; // Import the CSS file

const AddUserModal = ({ showModal, handleClose, refreshUsers }) => {
    const [newUser, setNewUser] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState('');

    const handleAddUser = async (e) => {
        e.preventDefault();
        const { password, confirmPassword } = newUser;

        // Trim whitespace for comparison
        const trimmedPassword = password.trim();
        const trimmedConfirmPassword = confirmPassword.trim();

        // Check if passwords match
        if (trimmedPassword !== trimmedConfirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            // Sending request to register the new user
            await axios.post('http://localhost:5000/register', {
                name: newUser.name,
                email: newUser.email,
                password: trimmedPassword,
            });
            refreshUsers(); // Refresh users list after adding
            handleClose(); // Close the modal
            // Reset form fields
            setNewUser({ name: '', email: '', password: '', confirmPassword: '' });
            setError(''); // Clear any previous errors
        } catch (error) {
            // Handle specific error messages from the server
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('Email Already Exists!'); // Generic error message
            }
        }
    };

    return (
        <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add New User</h5>
                        <button type="button" className="close" onClick={handleClose}>
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">
                        {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={handleAddUser}>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={newUser.name}
                                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                    placeholder="Enter user's name"
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={newUser.email}
                                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                    placeholder="Enter user's email"
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={newUser.password}
                                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                                    placeholder="Enter user's password"
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    value={newUser.confirmPassword}
                                    onChange={(e) => setNewUser({ ...newUser, confirmPassword: e.target.value })}
                                    placeholder="Confirm user's password"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save User
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUserModal;
