import styled from "styled-components";

const SearchInput = (props) => {
  return <Input type="search" {...props}/>
}

const Input = styled.input`
  background: #f5f5f5;
  border-radius: 10px;
  margin-top: 3px;
  border: none;
  width: 15rem;
  height: 1.5rem;
  padding: 5px;
`;

export default SearchInput;
