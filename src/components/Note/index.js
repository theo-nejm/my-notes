import React from 'react';
import { NoteWrapper } from './styled';
import { RiDeleteBin5Line } from 'react-icons/ri';
export default function Note(props) {
  return (
    <NoteWrapper>
      <div className="note-header">
        <div className="divider" />
        <h3>{props.title}</h3>
        <RiDeleteBin5Line className="delete-icon" />
      </div>

      <div className="note-body">
        <p>{props.body}</p>
      </div>
    </NoteWrapper>
  )
}
