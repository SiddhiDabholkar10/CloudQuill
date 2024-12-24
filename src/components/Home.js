import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import noteContext from "../context/notes/noteContext";



export const Home = () => {
  const context = useContext( noteContext);
  const {notes,setNotes} = context;

  return (
    <div className="container my-4">
      {/* Main Header */}
      <h1 style={{ fontFamily: "Arial, sans-serif", fontWeight: "700", color: "#2c3e50", textAlign: "center" }}>
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
          <Form.Group className="mb-4" controlId="formEmail">
            <Form.Label style={{ fontWeight: "600", color: "#34495e" }}>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              style={{
                borderRadius: "10px",
                padding: "12px",
                border: "1px solid #dcdde1",
                backgroundColor: "#f9f9f9",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formTextarea">
            <Form.Label style={{ fontWeight: "600", color: "#34495e" }}>Your Note</Form.Label>
            <Form.Control
              as="textarea"
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
            >
              Add Note
            </Button>
          </div>
        </Form>
      </Card>

      {/* Notes Section */}
      <div className="mt-5">
        <h2 style={{ fontFamily: "Arial, sans-serif", fontWeight: "700", color: "#2c3e50", textAlign: "center" }}>
          Your Notes
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#7f8c8d",
            fontStyle: "italic",
          }}
        >
         {notes.map((note)=>{
          return note.title;
         })}
        </p>
      </div>
    </div>
  );
};
