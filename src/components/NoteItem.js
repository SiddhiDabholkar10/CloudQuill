import React, { useContext, useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const { deleteNote, editNote } = useContext(NoteContext);
  const { note } = props;
  const navigate = useNavigate();

  // State for modal visibility and edited note
  const [showModal, setShowModal] = useState(false);
  const [editedNote, setEditedNote] = useState({ ...note });

  const handleViewClick = () => {
    navigate(`/onenote`, { state: { note } });
  };

  const handleEditClick = () => {
    setShowModal(true); // Show modal on edit click
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };

  const handleSaveChanges = (e) => {
    e.preventDefault(); // Prevent page reload
    editNote( editedNote._id,editedNote.title, editedNote.description, editedNote.tag); // Update the note
    console.log("Updated Note:", editedNote);
    console.log("Original Note ID:", note._id);
  console.log("Edited Note ID:", editedNote._id);
    setShowModal(false); // Close modal after saving
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedNote({
      ...editedNote,
      [name]: value,
    });
  };

  return (
    <>
      <Card
        style={{
          width: "18rem",
          
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Body >
          <div style={{height:"100px"}}>
          <Card.Title style={{ fontWeight: "600", color: "#2c3e50" }}>
            {note.title}
          </Card.Title>
          <Card.Text style={{ color: "#7f8c8d", fontSize: "14px" }}>
            {note.description.split(" ").slice(0, 10).join(" ")}
            {note.description.split(" ").length > 10 && "..."}
          </Card.Text>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <Button
              variant="outline-secondary"
              className="p-2"
              style={{
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleViewClick}
            >
              <FaEye />
            </Button>
            <Button
              variant="outline-primary"
              className="p-2"
              style={{
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleEditClick}
            >
              <FaEdit />
            </Button>
            <Button
              variant="outline-danger"
              className="p-2"
              onClick={() => {
                deleteNote(note._id); // Delete the note
              }}
              style={{
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaTrash />
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Modal for editing the note */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSaveChanges}>
            <Form.Group className="mb-4" controlId="title">
              <Form.Label style={{ fontWeight: "600", color: "#34495e" }}>
                Title
              </Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={editedNote.title}
                onChange={handleChange}
                style={{
                  borderRadius: "10px",
                  padding: "12px",
                  border: "1px solid #dcdde1",
                  backgroundColor: "#f9f9f9",
                }}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="tag">
              <Form.Label style={{ fontWeight: "600", color: "#34495e" }}>
                Tag
              </Form.Label>
              <Form.Control
                type="text"
                name="tag"
                value={editedNote.tag}
                onChange={handleChange}
                style={{
                  borderRadius: "10px",
                  padding: "12px",
                  border: "1px solid #dcdde1",
                  backgroundColor: "#f9f9f9",
                }}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="description">
              <Form.Label style={{ fontWeight: "600", color: "#34495e" }}>
                Description
              </Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={editedNote.description}
                onChange={handleChange}
               
                rows={4}
                style={{
                  borderRadius: "10px",
                  padding: "12px",
                  border: "1px solid #dcdde1",
                  backgroundColor: "#f9f9f9",
                }}
              />
            </Form.Group>
            <div className="text-center">
              <Button
                type="submit"
                style={{
                  backgroundColor: "#2980b9",
                  color: "#fff",
                  fontWeight: "600",
                  padding: "10px 20px",
                  borderRadius: "30px",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#3498db")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "#2980b9")
                }
              >
                Save Changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NoteItem;
