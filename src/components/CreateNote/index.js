import React from 'react';
import { CreateNoteWrapper, BlurBg } from './styled';
import { IoIosCloseCircleOutline, IoIosBookmark } from "react-icons/io";

function TitleInput() {
  return(
      <input
        type="text"
        id="title"
        placeholder="Title: [maximum 22 characters]"
        className="title-input"
      />
  )
}

function BodyInput() {
  return (
    <textarea
      type="text"
      id="body"
      placeholder="Type your note here: "
    />
  )
}

export default function CreateNote(props) {
  return (
    <>
      <BlurBg />
      <CreateNoteWrapper className="create-note-wrapper">
        <h2>New note</h2>
        <form id="new-note">
          <label htmlFor="title" className="sr-only">Title</label>
          <TitleInput className="title-input"/>

          <label htmlFor="body" className="sr-only">
          Description
          </label>
          <BodyInput />

          <div className="actions">
          <button
            type="button"
            className="cancel"
            onClick={props.onClickCloseButton}
          >
            <IoIosCloseCircleOutline className="cancel-icon" />
            Cancel
          </button>
          <button
            type="button"
            className="submit"
            onClick={props.onClickSubmit}
          >
            <IoIosBookmark className="submit-icon" />
            Submit
          </button>
        </div>
        </form>

      </CreateNoteWrapper>
    </>
  )
}
