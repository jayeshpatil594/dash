import styled from "styled-components";

const Card = (props) => {
  console.log(props);
  return (
    <CustomCard color={props.color}> 
      <h6 className="title">{props.title}</h6>
      <h4 className="description">{props.description}</h4>
      <div className="icon">
        {props.icon}
      </div>
    </CustomCard>
  )
}

const CustomCard = styled.div`
  background: ${(props) => props.color };
  border-radius: 10px;
  width: 13rem;
  height: 7rem;
  position: relative;

  & .title {
    padding-top: 2rem;
    text-align: center;
  }

  & .description {
    text-align: center;
  }

  & .icon {
    position: absolute;
    right: 5px;
    top: 5px;
  }
`;

export default Card;
