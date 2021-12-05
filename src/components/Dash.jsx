import styled from "styled-components";

const Dash = () => {
  return (
    <Panel>
      <CenteredHeading>Dash.</CenteredHeading>
    </Panel>
  ); 
}

const Panel = styled.div`
  background: #0d5f9a;
  height: 100%;
  position: relative;
`;

const CenteredHeading = styled.h1`
  position: absolute;
  top: 40%;
  left: 35%;
  color: white;
`;

export default Dash;
