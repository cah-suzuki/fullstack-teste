import styled from 'styled-components';

export const Content = styled.div`
  width: calc(100% - 140px);
  max-width: 912px;
  margin: 0 auto;
  .map {
    margin-top: 32px;
  }
  button {
    padding: 5px 16px !important;
  }
  h3 {
    margin-top: 64px;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
  }


  .container-button-register {
    display: flex;
    flex-direction: column;
    align-items:center;
  }
`;



export const InfoInput = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  background-color: 'black';
  align-itens: flex-end !important;
  margin-bottom: 1rem;

    .container-button-save {
    div {
       width: 100%;
       display: flex;
       justify-content: center;
    }

  }


  .name-textfield {
    margin-top: 1.5rem;
    max-width: 590px;
    min-width: 390px;
    margin-right: 1rem;
  }
`;
