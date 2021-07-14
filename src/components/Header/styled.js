import styled from 'styled-components';

export const Head = styled.header`
  padding: 1rem 1.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #252739;
  box-shadow: 0 0 5px rgba(0, 0, 0, .4);

  h1 {
    color: #252739;

    font-size: 1.8rem;
  }

  .addNote {
    color: #252739;
    background: none;
    border: 2px solid #252739;
  }

  .addNoteIcon {
    margin-right: .4rem;

    font-size: 1.2rem;
  }
`
