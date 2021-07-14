import React from 'react';
import { NoteWrapper } from './styled';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { GoBookmark, GoBook } from "react-icons/go";

export default function Note(props) {
  return (
    <NoteWrapper>
      <div className="note-body">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </div>

      <div className="note-actions">
        <GoBookmark className="star-icon" />
        <GoBook className="read-icon"/>
        <RiDeleteBin5Line
          className="delete-icon"
          onClick={props.deleteNote}
          id={props.index}
        />
      </div>
    </NoteWrapper>
  )
}
