import React from 'react';
import { CreateNoteWrapper } from './styled';
import { IoIosCloseCircleOutline, IoIosBookmark } from "react-icons/io";

export default function CreateNote() {
  return (
    <>
      <CreateNoteWrapper className="create-note-wrapper">
        <h2>New note</h2>
        <form>
          <label htmlFor="title" className="sr-only">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="title-input"
          />
          <label
            htmlFor="body"
            className="sr-only">
            Description
          </label>
          <textarea
            type="text"
            id="body"
            placeholder="Type your note here" />
        </form>
        <div className="divider"></div>

        <div className="actions">
          <button type="button" className="cancel">
            <IoIosCloseCircleOutline className="cancel-icon" />
            Cancel
          </button>
          <button type="button" className="submit">
            <IoIosBookmark className="submit-icon" />
            Submit
          </button>
        </div>
      </CreateNoteWrapper>
    </>
  )
}
