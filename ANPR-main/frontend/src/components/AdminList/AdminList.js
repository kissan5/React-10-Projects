import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminList.css";

const AdminList = () => {
  const [plates, setPlates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlates = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/detected_plates"
        );
        setPlates(response.data);
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchPlates();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this plate?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/delete_plate/${id}`);
      setPlates((prevPlates) => prevPlates.filter((plate) => plate._id !== id));
    } catch (error) {
      setError("Failed to delete plate");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );

  return (
    <div className="container mt-4">
      <h2>Detected Plates</h2>
      <div className="table-container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Plate</th>
              <th>Time</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {plates.map((plate, index) => (
              <tr key={plate._id}>
                <td>{index + 1}</td>
                <td>{plate.plate}</td>
                <td>{new Date(plate.time).toLocaleString()}</td>
                <td>
                  <img
                    src={plate.image}
                    alt={plate.plate}
                    style={{ width: "100px", height: "auto" }}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(plate._id)}
                  >
                    Delete
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

export default AdminList;
