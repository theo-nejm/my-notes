import React from 'react';
import { FiLayers } from 'react-icons/fi'

import { Head } from './styled';


export default function Header(props) {
  return (
    <Head>
      <h1>My notes</h1>
      <button className="addNote" onClick={props.onClick}>
        <FiLayers className="addNoteIcon" /> Add note
      </button>

    </ Head>
  )
}
