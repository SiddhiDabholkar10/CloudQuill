import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

import { useNavigate } from "react-router-dom"; 

const Notes = () => {
  const { notes, getNotes } = useContext(noteContext);
  const navigate = useNavigate();
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleAddNoteClick = () => {
    navigate("/addnote");  // Navigate to the AddNote component
  };

  return (
    <>
      

      <div
        style={{
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
          paddingTop: "20px",
        }}
      >
        <Container className="mt-3">
          <h2
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "700",
              color: "#2c3e50",
              textAlign: "center",
            }}
          >
            Your Notes
          </h2>

          <div className="d-flex justify-content-center mb-3">
            <button
              className="btn btn-success"
              style={{
                fontSize: "16px",
                borderRadius: "20px",
                padding: "10px 20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onClick={handleAddNoteClick}
            >
              <FaPlusCircle />
              Add Note
            </button>
          </div>

          <Row>
            {notes.map((note) => (
              <Col key={note._id} sm={6} md={4} lg={3} className="mb-4">
                <NoteItem note={note} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Notes;
