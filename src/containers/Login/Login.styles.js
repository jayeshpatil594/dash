import styled from "styled-components";

const CenteredDiv = styled.div`
  position: absolute;
  top: 18%;
  left: 25%;
`;
const FormContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 3rem;
`;

const Input = styled.input`
  background: #f5f5f5;
  border-radius: 10px;
  margin-top: 3px;
  border: none;
  width: 25rem;
  height: 3.5rem;
`;

const SigninButton = styled.button`
  background: #0d5f9a;
  color: white;
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  margin-top: 10px;
  color: white;
`;

export {
  CenteredDiv,
  FormContainer,
  Input,
  SigninButton
}