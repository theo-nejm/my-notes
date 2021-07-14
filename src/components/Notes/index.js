import React from 'react';

import { NotesWrapper } from './styled';
import Note from '../Note';


export default function Notes(props) {
  const notes = props.notes.map(note =>
    <Note title={note[0]} body={note[1]} />
  )
  return (
    <NotesWrapper>
      {notes}
    </NotesWrapper>
  )
}
