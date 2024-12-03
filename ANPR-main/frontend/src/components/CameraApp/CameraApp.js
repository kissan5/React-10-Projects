import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Card,
  Alert,
  Spinner,
} from "react-bootstrap";
import "./CameraApp.css";

const CameraApp = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [detectedPlate, setDetectedPlate] = useState("");
  const [imageGallery, setImageGallery] = useState([]);
  const [detectedTime, setDetectedTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (cameraActive) {
      startCamera();
    } else {
      stopCamera();
    }
    return () => stopCamera();
  }, [cameraActive]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      setError("Error accessing the camera. Please check your permissions.");
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const captureImage = async () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL("image/png");

    const blob = await fetch(imageData).then((res) => res.blob());

    const formData = new FormData();
    formData.append("image", blob, "captured_image.png");

    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const res = await fetch("http://127.0.0.1:5000/detect_plate", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const result = await res.json();
      if (result.detected_plates && result.detected_plates.length > 0) {
        setDetectedPlate(
          result.detected_plates.join(", ").replace(/[^\w\s]/gi, "")
        );
      } else {
        setDetectedPlate("No plates detected");
      }

      setDetectedTime(result.timestamp);
      setCapturedImage(imageData);
      setImageGallery((prevGallery) => [...prevGallery, imageData]);
      setCameraActive(false);
      setSuccessMessage("Image captured successfully!");
    } catch (error) {
      console.error("Error during fetch:", error);
      setError("Error capturing image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = (imageData) => {
    const link = document.createElement("a");
    link.href = imageData;
    link.download = "captured_image.png";
    link.click();
  };

  const clearFields = () => {
    setDetectedPlate("");
    setCapturedImage(null);
    setDetectedTime("");
    setSuccessMessage("");
  };

  const resetCamera = () => {
    clearFields();
    setCameraActive(false);
  };

  const resetGallery = () => {
    if (window.confirm("Are you sure you want to reset the gallery?")) {
      setImageGallery([]);
    }
  };

  const saveData = async () => {
    try {
      let result = await fetch("http://localhost:5000/save_plate", {
        method: "POST",
        body: JSON.stringify({
          plate: detectedPlate,
          time: detectedTime,
          image: capturedImage,
        }),
        headers: { "Content-Type": "application/json" },
      });
      result = await result.json();
      console.log("Data saved successfully:", result);
      setSuccessMessage("Data saved successfully!");
      clearFields(); // Clear the fields after saving if desired
    } catch (error) {
      console.error("Error saving data:", error);
      setError("Error saving data. Please try again.");
    }
  };

  return (
    <div className="app-container">
      <Container className="mt-4">
        {error && <Alert variant="danger">{error}</Alert>}
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        <Row>
          <Col md={4}>
            <Card className="mb-4 equal-height-card">
              <Card.Header>Camera Feed</Card.Header>
              <Card.Body>
                <div className="camera-container">
                  <video ref={videoRef} autoPlay className="video-feed" />
                  <canvas
                    ref={canvasRef}
                    width="640"
                    height="480"
                    className="hidden-canvas"
                  />
                  {!cameraActive && capturedImage && (
                    <img
                      src={capturedImage}
                      alt="Captured"
                      className="captured-image"
                    />
                  )}
                </div>
                <div className="button-group">
                  <Button
                    variant="primary"
                    onClick={() => setCameraActive(!cameraActive)}
                    className="mb-2"
                  >
                    {cameraActive ? "Stop Camera" : "Start Camera"}
                  </Button>
                  <Button
                    variant="success"
                    onClick={captureImage}
                    disabled={!cameraActive || loading}
                    className="mb-2"
                  >
                    {loading ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      "Capture Image"
                    )}
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => setCameraActive(false)}
                    disabled={!cameraActive}
                    className="mb-2"
                  >
                    Cancel Capture
                  </Button>
                  <Button
                    variant="danger"
                    onClick={resetCamera}
                    disabled={!capturedImage}
                    className="mb-2"
                  >
                    Reset
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 equal-height-card">
              <Card.Header>Details</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Detected Number Plate</Form.Label>
                    <Form.Control type="text" value={detectedPlate} readOnly />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Detected Time</Form.Label>
                    <Form.Control type="text" value={detectedTime} readOnly />
                  </Form.Group>
                  <div className="button-group">
                    <Button
                      variant="info"
                      onClick={saveData} // Update to call the saveData function
                      disabled={!detectedPlate || !capturedImage}
                      className="me-2"
                    >
                      Save
                    </Button>

                    <Button
                      variant="warning"
                      onClick={clearFields}
                      disabled={!capturedImage}
                    >
                      Clear
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 equal-height-card">
              <Card.Header>Image Gallery</Card.Header>
              <Card.Body>
                {imageGallery.length > 0 ? (
                  <Row>
                    {imageGallery.map((image, index) => (
                      <Col
                        key={index}
                        xs={6}
                        className="mb-3 image-gallery-item"
                      >
                        <img
                          src={image}
                          alt={`Captured ${index}`}
                          className="gallery-image"
                        />
                        <div className="gallery-buttons d-flex justify-content-start mt-2">
                          <Button
                            variant="primary"
                            onClick={() => downloadImage(image)}
                            className="me-2"
                          >
                            Download
                          </Button>
                          <Button variant="danger" onClick={resetGallery}>
                            Reset
                          </Button>
                        </div>
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <p>No images captured yet.</p>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CameraApp;
