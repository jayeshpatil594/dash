import styled from "styled-components";

const Wrapper = styled.div`
padding-left: 2rem;
  & div {
    margin-right: 1rem;
  }
`;

const ChartContainer = styled.div`
  background: white;
  border-radius: 10px;
  height: 20rem;
  padding: 2rem;
  margin-left: 1rem;
  margin-top: 2rem;
`;

export {
  Wrapper,
  ChartContainer,
}
