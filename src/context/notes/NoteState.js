import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
          "_id": "6768ba7878ca0e75059d1146",
          "user": "6768ba15164670d04aae0acd",
          "title": "I am Naresh",
          "description": "Let's code",
          "tag": "ToDo",
          "date": "2024-12-23T01:18:48.009Z",
          "__v": 0
        }
      ];
      const [notes,setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{notes,setNotes}}>{props.children}</NoteContext.Provider>
  );
};
export default NoteState;
