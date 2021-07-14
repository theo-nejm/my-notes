import styled from "styled-components";

export const NoteWrapper = styled.div`
  height: 12rem;
  width: 18rem;
  border: 1px solid black;
  padding: 1rem .5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #f6fAAC;
  box-shadow:
    -.15rem .15rem 0 #f5f99B,
    -.25rem .25rem 0 #252739
  ;
  transition: cubic-bezier(0.68, -0.55, 0.265, 1.55) .5s;
  color: #252739;

  position: relative;
  &:hover {
    box-shadow: none;
    transform: translateX(-.25rem) translateY(.25rem);
  }

  .note-actions {
    width: 3rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .delete-icon,
    .read-icon,
    .star-icon {
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

  .note-body {
    height: 12rem;
    width: 15rem;
    padding: .5rem;


    overflow: hidden;

    h3 {
      font-size: 1.3rem;
      text-align: center;
      margin: .5rem 0;
    }

    p {
      line-height: 1.1rem;
      text-align: justify-all;
    }


  }


`
