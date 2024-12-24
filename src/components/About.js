
import { useContext, React, useEffect } from 'react';
import NoteContext from '../context/notes/noteContext';

const About = () => {

  const a = useContext(NoteContext);
  useEffect(()=>{
    a.update()
    //eslint-disable-next-line
  },[])
  return (
    <div>
      This is About {a.state.name} who is {a.state.class}
    </div>
  )
}

export default About
