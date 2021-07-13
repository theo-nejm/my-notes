import styled from "styled-components";

export const CreateNoteWrapper = styled.div`
  padding: 1rem 1.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 60vh;
  width: 60vw;

  background: #f4f88A;
  border: 1px solid #252739;

  box-shadow:
    -.15rem .15rem 0 #f3e779,
    -.35rem .35rem 0 #252739
  ;

  position: absolute;

  top: 50%;
  left: 50%;

  transform: translateX(-50%) translateY(-50%);

  h2 {
    color: #252739;
    text-shadow: 0 0 15px rgba(36, 37, 4, .25);
    margin: .5rem 0 1.5rem;
  }

  form {
    height: 100%;
    width: 100%;
  }

  #title {
    height: 2rem;
    width: 100%;
    font-size: .9rem;
    padding: .2rem .3rem;

    margin-bottom: .75rem;

    border: 1px solid #252739;
  }

  #body {
    height: 70%;
    width: 100%;
    padding: .2rem .3rem;
    resize: none;

    border: 1px solid #252739;
  }

  .actions {
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .actions .cancel {
    color: #252739;
    background: none;
    border: 2px solid #252739;

    height: 2.4rem;
  }

  .actions .cancel .cancel-icon {
    font-size: 1.4rem;
    margin-right: .4rem;
  }

  .actions .submit {
    color: #f3e779;
    background: #252739;
    border: 2px solid #252739;

    height: 2.4rem;
  }

  .actions .submit .submit-icon {
    font-size: 1.2rem;
    margin-right: .4rem;
  }
`
