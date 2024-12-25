import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6768ba7878ca0e75059d1146",
      user: "6768ba15164670d04aae0acd",
      title: "I am Naresh",
      description: "Let's code.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro in nemo odit recusandae fuga minima optio, eaque earum tenetur deleniti a vero delectus mollitia et dolores esse quis reiciendis nobis dolor maxime doloremque libero?",
      tag: "ToDo",
      date: "2024-12-23T01:18:48.009Z",
      __v: 0,
    },
    {
        _id: "6768ba7878ca0e75059d1147",
        user: "6768ba15164670d04aae0acd",
        title: "I am Naresh",
        description: "Let's code.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro in nemo odit recusandae fuga minima optio, eaque earum tenetur deleniti a vero delectus mollitia et dolores esse quis reiciendis nobis dolor maxime doloremque libero?Let's code.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro in nemo odit recusandae fuga minima optio, eaque earum tenetur deleniti a vero delectus mollitia et dolores esse quis reiciendis nobis dolor maxime doloremque libero?",
        tag: "ToDo",
        date: "2024-12-23T01:18:48.009Z",
        __v: 0,
      },
      {
        _id: "6768ba7878ca0e75059d1148",
        user: "6768ba15164670d04aae0acd",
        title: "I am Naresh",
        description: "Let's code.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro in nemo odit recusandae fuga minima optio, eaque earum tenetur deleniti a vero delectus mi?",
        tag: "ToDo",
        date: "2024-12-23T01:18:48.009Z",
        __v: 0,
      },
  ];
  const [notes, setNotes] = useState(notesInitial);

  //add a note
  const addNote = (n)=>{
    //TODO: API Call
    console.log("Adding a new note")
    const note = {
        _id: "6768ba7878ca0e75059d1149",
        user: "6768ba15164670d04aae0acd",
        title: n.title,
        description: n.description,
        tag: n.tag,
        date: "2024-12-23T01:18:48.009Z",
        __v: 0,
      };
    setNotes(notes.concat(note))   //push note to Notes arrays
  }
  //delete a note 

  const deleteNote = ()=>{

  }


  //edit a notw
  const editNote = ()=>{

  }
  


  return (
    <NoteContext.Provider value={{ notes, addNote,deleteNote,editNote }}>
      {props.children}
    </NoteContext.Provider>
    
    /*The value={{notes, setNotes}} prop passed to NoteContext.Provider makes the notes and setNotes values available to all components that consume this context.
            props.children represents the child components nested inside NoteState, so they can access the context.
            jsx

 */
  );
};
export default NoteState;
