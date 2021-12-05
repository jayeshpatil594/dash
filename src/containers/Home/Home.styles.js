import styled from "styled-components";

const Wrapper = styled.div`
  background: #0d5f9a;
  height: 100vh;

  & h4 {
    padding: 2rem;
    text-align: center;
  }

  & .nav-pills .nav-link.active {
    background: none;
    color: white;
    font-weight: bold;
  }

  & .nav-link {
    color: white;
    font-weight: lighter;
  }
`;

const UserListWrapper = styled.div`
  background: white;
  border-radius: 10px;
`;

const Avatar = styled.img`
  vertical-align: middle;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-left: 0.5rem;
`

export {
  Wrapper,
  UserListWrapper,
  Avatar,
}
