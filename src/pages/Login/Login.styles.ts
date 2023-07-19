import styled from '@emotion/styled';

export const LoginContainer = styled.form`
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 32px;
  box-sizing: border-box;
`;

export const LoginTitle = styled.h1`
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  color: #101828;
  margin: 0;
  margin-bottom: 12px;
`;

export const ParagraphLogin = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  margin-bottom: 32px;
  text-align: center;
  color: #475467;
`;

export const LabelForm = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #344054;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;

  & > input {
    padding: 10px 14px;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    margin-bottom: 20px;
    box-sizing: border-box;
    width: 360px;
  }
`;

export const LinkStyled = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  width: 360px;
  color: #6941c6;
  cursor: pointer;
  text-align: right;
  margin: 0;
  margin-bottom: 24px;
`;

export const ButtonStyled = styled.button`
  padding: 10px 18px;
  width: fit-content;
  background: #7f56d9;
  color: #ffffff;
  cursor: pointer;
  border: 1px solid #7f56d9;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  box-sizing: border-box;
`;
