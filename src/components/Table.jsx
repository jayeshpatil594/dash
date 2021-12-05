import styled from "styled-components";

const Table = (props) => {
  return (
    <CustomTable>
      {props.items.map((item) => <tr key={item.id}>
        <td><img src={item.avatar} alt="Avatar" className="avatar" /></td>
        <td>{item.id}</td>
        <td>{item.first_name} {item.last_name}</td>
        <td>{item.email}</td>
      </tr>)}
    </CustomTable>
  )
}

const CustomTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 1rem;
  width: 100%;

  & tr {
    background: #EDEDED;
    border-radius: 10px;
  }

  & td {
    padding: 1rem;
  }

  & img {
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`

export default Table;
