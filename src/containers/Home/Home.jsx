import { DashboardIcon } from "../../components/Icons/Dashboard";
import { Notification } from "../../components/Icons/Notifcation";
import { SchedulesIcon } from "../../components/Icons/Schedules";
import { SettingsIcon } from "../../components/Icons/Settings";
import { TransactionsIcon } from "../../components/Icons/Transactions";
import { UserIcon } from "../../components/Icons/User";
import SearchInput from "../../components/SearchInput";
import Dashboard from "../Dashboard/Dashboard";
import Settings from "../Settings/Settings";
import UserList from "../UserList/UserList";
import { Avatar, UserListWrapper, Wrapper } from "./Home.styles";

const renderTabItems = () => {
  return (
    <>
      <li
        className="nav-link active"
        id="v-pills-dashboard-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-dashboard"
        type="button"
        role="tab"
        aria-controls="v-pills-dashboard"
        aria-selected="true"
      >
        <DashboardIcon /> Dashboard
      </li>
      <li
        className="nav-link"
        id="v-pills-transactions-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-transactions"
        type="button"
        role="tab"
        aria-controls="v-pills-transactions"
        aria-selected="false"
      >
        <TransactionsIcon /> Transactions
      </li>
      <li
        className="nav-link"
        id="v-pills-schedules-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-schedules"
        type="button"
        role="tab"
        aria-controls="v-pills-schedules"
        aria-selected="false"
      >
        <SchedulesIcon /> Schedules
      </li>
      <li
        className="nav-link"
        id="v-pills-users-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-users"
        type="button"
        role="tab"
        aria-controls="v-pills-users"
        aria-selected="false"
      >
        <UserIcon /> Users
      </li>
      <li
        className="nav-link"
        id="v-pills-settings-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-settings"
        type="button"
        role="tab"
        aria-controls="v-pills-settings"
        aria-selected="false"
      >
        <SettingsIcon /> Settings
      </li>
    </>
  );
};

const Home = () => {
  return (
    <>
      <div className="row" style={{ marginRight: "0px" }}>
        <div className="d-flex align-items-start">
          <div className="col-md-2">
            <Wrapper>
              <h4 style={{ color: "white" }}>Dash.</h4>
              <div
                style={{ alignContent: "center" }}
                className="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {renderTabItems()}
              </div>
            </Wrapper>
          </div>
          <div
            className="col-md-10"
            style={{ background: "#E5E5E5", height: "100vh" }}
          >
            <div
              className="row justify-content-between"
              style={{ paddingTop: "2rem" }}
            >
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <SearchInput
                  placeholder="Search..."
                  style={{ height: "2.2rem", marginRight: "1rem" }}
                />
                <Notification />
                <Avatar
                  src="https://reqres.in/img/faces/5-image.jpg"
                  alt="Avatar"
                  className="avatar"
                />
              </div>
            </div>
            <div
              className="tab-content"
              id="v-pills-tabContent"
              style={{ padding: "1rem" }}
            >
              <div
                className="tab-pane fade show active"
                id="v-pills-dashboard"
                role="tabpanel"
                aria-labelledby="v-pills-dashboard-tab"
              >
                <div style={{ padding: "1rem" }}>
                  <h4>Dashboard</h4>
                </div>
                <Dashboard />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-transactions"
                role="tabpanel"
                aria-labelledby="v-pills-transactions-tab"
              >
                Transactions coming soon...
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-schedules"
                role="tabpanel"
                aria-labelledby="v-pills-schedules-tab"
              >
                Schedules coming soon...
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-users"
                role="tabpanel"
                aria-labelledby="v-pills-users-tab"
              >
                <UserListWrapper>
                  <UserList />
                </UserListWrapper>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <Settings />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
