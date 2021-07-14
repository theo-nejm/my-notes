import styled from "styled-components";

export const NoteWrapper = styled.div`
  height: 8rem;
  width: 12rem;

  border: 1px solid black;

  padding: .5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #f6fAAC;

  box-shadow:
    -.15rem .15rem 0 #f5f99B,
    -.25rem .25rem 0 #252739
  ;

  transition: cubic-bezier(0.68, -0.55, 0.265, 1.55) .5s;

  color: #252739;

  &:hover {
    box-shadow: none;
    transform: translateX(-.25rem) translateY(.25rem);
  }

  .note-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: .4rem;

    .delete-icon,
    .divider {
      width: 1.5rem;
    }

    .delete-icon {
      font-size: 1.3rem;
      cursor: pointer;
    }
  }

  h3 {
    font-size: 1.5rem;
  }
`
