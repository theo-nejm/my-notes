import styled from "styled-components";

export const NoNotesWrapper = styled.div`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 auto;

  .closed-notebook {
    height: 12rem;
    width: 12rem;
  }

  .no-notes-content {
    margin-left: -1rem;
  }

  .no-notes-content h3 {
    margin-bottom: 1rem;
    color: #252739;
    font-size: 1.2rem;
  }
`
