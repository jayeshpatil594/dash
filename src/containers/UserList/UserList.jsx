import { useCallback, useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import SearchInput from "../../components/SearchInput";
import Table from "../../components/Table";
import useDebounce from "../../hooks/useDebounce";
import { TableWrapper } from "./UserList.styles";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const debouncingInput = useDebounce(searchValue, 1500);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${currentPage}`)
      .then((res) => res.json())
      .then((results) => {
        setUsers(results.data);
        setUsersCount(results.total);
      });
  }, [currentPage]);

  useEffect(() => {
    if (debouncingInput) {
      fetch(`https://reqres.in/api/users?page=${currentPage}`)
        .then((res) => res.json())
        .then((results) => {
          setUsers(results.data);
        });
      const filteredUsers = users.filter(
        ({ first_name, last_name }) =>
          `${first_name} ${last_name}`
            .toString()
            .toLowerCase()
            .indexOf(searchValue.toString().toLowerCase()) !== -1
      );

      setUsers(filteredUsers);
    }
  }, [currentPage, debouncingInput, searchValue, users]);

  const onSearch = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  const onPageChanged = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="row justify-content-between">
        <div className="col-md-4">
          <h4 style={{ margin: "20px 0px 0px 20px" }}>User records</h4>
        </div>
        <div className="col-md-4">
          <SearchInput
            placeholder="Search in table..."
            onChange={onSearch}
            style={{ height: "2.2rem", margin: "20px 0px 0px 20px" }}
          />
        </div>
      </div>

      <TableWrapper>
        {!users?.length ? (
          <div className="alert alert-secondary" role="alert">
            No users found
          </div>
        ) : (
          <Table items={users} />
        )}
      </TableWrapper>
      <div className="row justify-content-end" style={{ marginTop: "0.5rem" }}>
        <div className="col-4">
          <Pagination
            totalRecords={usersCount}
            pageLimit={6}
            pageNeighbours={5}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default UserList;
