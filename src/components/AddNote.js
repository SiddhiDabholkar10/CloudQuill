import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const { addNote } = useContext(noteContext);
  const [note, setNote] = useState({ title: "", description: "", tag: "" }); //this is the initial state of a note
  const handleAddNote = (e) => {
    e.preventDefault(); //to prevent page reload
    addNote(note.title, note.description, note.tag);
    //now send the new not to addNote
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    //...keep whatever is in the note. and map the name to the value that is e.title = whatever is in title
  };
  return (
    <div className="container my-4">
      {/* Main Header */}
      <h1
        style={{
          fontFamily: "Arial, sans-serif",
          fontWeight: "700",
          color: "#2c3e50",
          textAlign: "center",
        }}
      >
        Add a Note
      </h1>
      <p style={{ color: "#7f8c8d", textAlign: "center" }}>
        Organize your thoughts in a beautiful and simple way!
      </p>

      {/* Form Card */}
      <Card
        className="shadow-lg"
        style={{
          padding: "20px",
          borderRadius: "10px",
          border: "none",
          background: "linear-gradient(145deg, #ffffff, #f3f3f3)",
          boxShadow: "10px 10px 20px #e0e0e0, -10px -10px 20px #ffffff",
        }}
      >
        <Form>
          <Form.Group className="mb-4" controlId="title">
            <Form.Label style={{ fontWeight: "600", color: "#34495e" }}>
              Title
            </Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Note Title"
              onChange={onChange}
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
              onChange={onChange}
              placeholder="Add a Tag"
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
              Your Note
            </Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              onChange={onChange}
              rows={4}
              placeholder="Write your thoughts here..."
              style={{
                borderRadius: "10px",
                padding: "12px",
                border: "1px solid #dcdde1",
                backgroundColor: "#f9f9f9",
              }}
            />
          </Form.Group>

          {/* Stylish Button */}
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
              onMouseOver={(e) => (e.target.style.backgroundColor = "#3498db")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2980b9")}
              onClick={handleAddNote}
            >
              Add Note
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AddNote;
