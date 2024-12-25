import React from "react";
import { Card, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaArrowLeft } from "react-icons/fa";

const OneNote = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Access the note passed via state
  const note = state?.note;

  // If no note is passed, redirect to notes page
  if (!note) {
    navigate("/mynotes");
    return null;
  }

  const handleEdit = () => {
    alert("Edit functionality goes here.");
  };

  const handleDelete = () => {
    alert("Delete functionality goes here.");
    navigate("/mynotes");
  };

  const handleBack = () => {
    navigate("/mynotes");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
        padding: "20px",
      }}
    >
      <Card
        style={{
          width: "80%", // Increased card width to occupy more space
          padding: "20px",
          borderRadius: "15px",
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          position: "relative", // Allows precise placement of back button
        }}
      >
        {/* Back Button */}
        <Button
          variant="outline-secondary"
          className="p-2"
          style={{
            position: "absolute",
            top: "15px", // Adjusted top position to avoid overlap
            left: "15px", // Added some left margin for better spacing
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleBack}
        >
          <FaArrowLeft />
        </Button>

        <Card.Body style={{ paddingTop: "50px" }}> {/* Added padding to give space for the Back button */}
          <Card.Title style={{ fontSize: "2rem", fontWeight: "bold", color: "#2c3e50" }}>
            {note.title}
          </Card.Title>
          <Card.Subtitle
            className="mb-3 text-muted"
            style={{ fontSize: "1.1rem", marginBottom: "20px" }}
          >
            Tag: {note.tag} | Date: {new Date(note.date).toLocaleDateString()}
          </Card.Subtitle>
          <Card.Text style={{ fontSize: "1.2rem", color: "#7f8c8d" }}>
            {note.description}
          </Card.Text>
          <div className="d-flex justify-content-end mt-4">
            <Button
              variant="outline-primary"
              className="p-2"
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleEdit}
            >
              <FaEdit />
            </Button>
            <Button
              variant="outline-danger"
              className="p-2 mx-3"
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleDelete}
            >
              <FaTrash />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OneNote;
