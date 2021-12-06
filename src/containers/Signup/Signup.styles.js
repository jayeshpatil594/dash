import styled from "styled-components";

const CenteredDiv = styled.div`
  position: absolute;
  top: 18%;
  left: 25%;
`;
const FormContainer = styled.div`
  width: 100%;
  background: white;
  border-radius: 10px;
  padding: 3rem;
`;

const Input = styled.input`
  background: #f5f5f5;
  border-radius: 10px;
  margin-top: 3px;
  border: none;
  width: 100%;
  height: 3.5rem;
`;

const SignupButton = styled.button`
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
  Input,
  SignupButton,
  FormContainer,
  CenteredDiv,
}
