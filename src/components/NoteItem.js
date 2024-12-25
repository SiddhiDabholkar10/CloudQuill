import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
    const {deleteNote} = useContext(NoteContext);
  const { note } = props;
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/onenote`,  { state: { note } });
  };

  return (
    <Card
      style={{
        width: "18rem",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Card.Body>
        <Card.Title style={{ fontWeight: "600", color: "#2c3e50" }}>
          {note.title}
        </Card.Title>
        <Card.Text style={{ color: "#7f8c8d", fontSize: "14px" }}>
          {note.description.split(" ").slice(0, 10).join(" ")}
          {note.description.split(" ").length > 10 && "..."}
        </Card.Text>
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
          >
            <FaEdit />
          </Button>
          <Button
            variant="outline-danger"
            className="p-2"
            onClick={() => { deleteNote(note._id); }}

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
  );
};

export default NoteItem;
