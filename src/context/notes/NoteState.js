import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

   //get all notes
   const getNotes =async () => {
    //TODO: API Call
    
    const response = await fetch(`${host}/api/notes/fnotes`,{
      method: 'GET',
      headers: {
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc2YmI2YzdmYzdkZjNjMTUyYmM2MjdkIn0sImlhdCI6MTczNTExMjQwNH0.OfOs-Pk9iMcmz1rpQUxWSM4hiKmfoOYXnc-Drj7MELU',
          'Content-Type' : 'application/json'
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }






  //add a note
  const addNote =async (title, description,tag) => {
    //TODO: API Call
    
    const response = await fetch(`${host}/api/notes/anote`,{
      method: 'POST',
      headers: {
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc2YmI2YzdmYzdkZjNjMTUyYmM2MjdkIn0sImlhdCI6MTczNTExMjQwNH0.OfOs-Pk9iMcmz1rpQUxWSM4hiKmfoOYXnc-Drj7MELU',
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify({title, description,tag})
    });
    //console.log("Adding a new note");
    const note = {
      _id: "6768ba7878ca0e75059d1149",
      user: "6768ba15164670d04aae0acd",
      title: title,
      description: description,
      tag: tag,
      date: "2024-12-23T01:18:48.009Z",
      __v: 0,
    };
    setNotes(notes.concat(note)); //push note to Notes arrays
  };
  //delete a note

  const deleteNote = (id) => {
    //console.log("Deleting the Not" + id);
    const newNotes = notes.filter((note)=>{return note._id !== id})
    setNotes(newNotes);
    //keep all the notes whose id is not the same as the id passed to this delete function
  };

  //edit a note
  const editNote = async (id,title,description,tag) => {
      //TODO: API Call
      const response = await fetch(`${host}/api/notes/unote/${id}`,{
        method: 'POST',
        headers: {
          
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc2YmI2YzdmYzdkZjNjMTUyYmM2MjdkIn0sImlhdCI6MTczNTExMjQwNH0.OfOs-Pk9iMcmz1rpQUxWSM4hiKmfoOYXnc-Drj7MELU',
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(title,description,tag)
      });
      
        const json = response.json();

      //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id ) {
          element.title = title;
          element.description = description;
          element.tag = tag;
      }
      
  }
  }
    

  
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>

    /*The value={{notes, setNotes}} prop passed to NoteContext.Provider makes the notes and setNotes values available to all components that consume this context.
            props.children represents the child components nested inside NoteState, so they can access the context.
            jsx

 */
  );
};
export default NoteState;
