import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  gap: 1rem;
  border: none;
  padding: 0;
  margin: 0;
  & > label {
    position: relative;
    & > input {
      width: 97%;
      padding: 14px 10px 18px 8px;
      outline: 0;
      border: 1px solid rgba(105, 105, 105, 0.397);
      border-radius: 5px;
      color: #2c2c2c;
      font-size: 14px;
      & ~ span {
        position: absolute;
        left: 10px;
        top: 19px;
        color: grey;
        font-size: 0.9em;
        cursor: text;
        transition: 0.3s ease;
      }
      &:focus ~ span,
      &:valid ~ span {
        top: 35px;
        font-size: 0.6em;
        font-weight: 600;
      }
    }
  }
`;

export const Legend = styled.legend`
  font-size: 1rem;
  font-weight: 600;
  color: #6c757d;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  position: relative;
  & > textarea {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 5px;
    font-size: 13px;
    color: #2c2c2c;
    & ~ span {
      position: absolute;
      left: 10px;
      top: 75px;
      color: grey;
      font-size: 0.9em;
      cursor: text;
      transition: 0.3s ease;
    }
    &:focus ~ span,
    &:valid ~ span {
      top: 83px;
      font-size: 0.6em;
      font-weight: 600;
    }
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  background-color: #f8f8f8;
  font-size: 1rem;
  resize: none;
  outline: none;
  position: relative;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1.5px solid #cacaca;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 390;
  letter-spacing: 2px;
  margin: 0;
  outline: none;
  padding: 10px 30px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-size: 13px;

  &:before {
    content: ' ';
    width: 1.7rem;
    height: 2px;
    background: #cacaca;
    top: 50%;
    left: 29%;
    position: absolute;
    transform: translateY(-50%);
    transform: translateX(230%);
    transform-origin: center;
    transition: background 0.3s linear, width 0.3s linear;
    @media (max-width: 480px) {
      left: 5px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      left: 23%;
    }
  }

  & > span:nth-of-type(1) {
    height: 2px;
    width: 1.5625rem;
    top: -2px;
    left: 0.625rem;
    position: absolute;
    background: white;
    transition: width 0.5s ease-out, left 0.3s ease-out;
  }
  & > span:nth-of-type(2) {
    font-size: 1.125em;
    line-height: 1.33333em;
    padding-left: 2em;
    text-align: left;
    transition: all 0.3s ease-in-out;
    text-transform: lowercase;
    text-decoration: none;
    color: #818181;
    transform: translateX(30%);
  }
  & > span:nth-of-type(3) {
    height: 2px;
    width: 1.5625rem;
    right: 1.75rem;
    bottom: -2px;
    position: absolute;
    background: white;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }
  & > span:nth-of-type(4) {
    height: 2px;
    width: 0.625rem;
    right: 0.625rem;
    bottom: -2px;
    position: absolute;
    background: white;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }

  &:hover {
    color: #fff;
    background: #6e7376;
    border-color: #6e7376;
  }

  &:hover:before {
    width: 1.5rem;
    background: #fff;
  }

  &:hover > span:nth-of-type(1) {
    width: 0;
    left: -2px;
  }

  &:hover > span:nth-of-type(2) {
    color: #fff;
    padding-left: 5px;
  }

  &:hover > span:nth-of-type(3),
  &:hover > span:nth-of-type(4) {
    right: 0;
    width: 0;
  }
`;
