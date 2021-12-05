import styled from "styled-components";

const FormContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  margin-right: 1.5rem;
`;

const Input = styled.input`
  background: #f5f5f5;
  border-radius: 10px;
  margin-top: 3px;
  border: none;
  width: 100%;
  height: 2rem;
`;

const SaveButton = styled.button`
  background: #519BD0;
  color: white;
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 0.5rem;
  margin-top: 10px;
  color: white;
`;

const DangerButton = styled.button`
  background: white;
  color: #AF0000;
  width: 100%;
  border: 1px solid #AF0000;
  border-radius: 10px;
  padding: 0.5rem;
  margin-top: 10px;
`;

const Avatar = styled.img`
  vertical-align: middle;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
`

const FormItem = styled.div`
  padding-top: 1rem;

  & label {
    padding-bottom: 0.2rem;
  }
`

export {
  FormContainer,
  Input,
  FormItem,
  DangerButton,
  Avatar,
  SaveButton,
}
