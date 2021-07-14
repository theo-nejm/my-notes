import React from 'react';
import { NoNotesWrapper } from './styled';
import notebookImg from '../../assets/closed-notebook.png';

export default function NoNotes() {
  return (
    <NoNotesWrapper>
      <img src={notebookImg} alt="A notebook with a pencil." className="closed-notebook"/>

      <div className="no-notes-content">
        <h3>Ooops... You don't have notes yet.</h3>
        <p>Let's get started! Create a new one!</p>
      </div>
    </NoNotesWrapper>
  )
}
