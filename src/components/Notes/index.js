import React from 'react';

import { NotesWrapper } from './styled';
import Note from '../Note';


export default function Notes(props) {
  const notes = props.notes.map(note =>
    <Note
      title={note[0]}
      body={note[1]}
      key={props.notes.indexOf(note) + 'N'}
      index={props.notes.indexOf(note)}
      deleteNote={props.deleteNote}
      />
  )

  return (
    <NotesWrapper>
      {notes}
    </NotesWrapper>
  )
}
