import styled from '@emotion/styled';

export const Content = styled.div`
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & > h2 {
    color: #2c2c2c;
    margin: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > label {
    position: relative;
  }
  & > input {
    width: 97%;
    padding: 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 5px;
    color: #2c2c2c;
    font-size: 14px;
  }

  & > textarea {
    width: 97%;
    padding: 14px 10px 18px 8px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 5px;
    color: #2c2c2c;
    font-size: 14px;
  }

  & > button {
    width: 100%;
    padding: 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 5px;
    color: #2c2c2c;
    font-size: 14px;
    background: #7f56d9;
    color: #ffffff;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
      background: #6a4bc9;
    }
  }
`;
