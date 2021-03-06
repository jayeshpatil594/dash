import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dash from "../../components/Dash";
import {
  CenteredDiv,
  FormContainer,
  Input,
  SignupButton,
} from "./Signup.styles";

const Signup = () => {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name.firstName, name.lastName, email, password);
    navigate("/");
  };

  return (
    <>
      <div
        className="row"
        style={{ marginRight: "0px", height: "100vh", paddingRight: "0px" }}
      >
        <div className="col-md-4">
          <Dash />
        </div>
        <div
          className="col-md-8"
          style={{
            background: "#F5F5F5",
            position: "relative",
            paddingLeft: "0px",
          }}
        >
          <CenteredDiv>
            <h1>Create an account</h1>
            <h6>Create an account to use dashboard</h6>
            <form onSubmit={handleSubmit}>
              <FormContainer>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="firstname">
                      Firstname
                      <div>
                        <Input
                          value={name.firstName}
                          id="firstname"
                          name="firstname"
                          onChange={(e) => {
                            setName({ ...name, firstName: e.target.value });
                          }}
                        />
                      </div>
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastname">
                      Lastname
                      <div>
                        <Input
                          value={name.lastName}
                          id="lastname"
                          name="lastname"
                          onChange={(e) => {
                            setName({ ...name, lastName: e.target.value });
                          }}
                        />
                      </div>
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="email">Email address</label>
                  <div>
                    <Input
                      value={email}
                      id="email"
                      name="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <div>
                    <Input
                      value={password}
                      id="password"
                      name="password"
                      type="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <h6>forgot password?</h6>
                <SignupButton type="submit">Sign Up</SignupButton>
              </FormContainer>
            </form>
            <p>
              Already have an account?{" "}
              <Link to="/login" style={{ color: "#0D5F9A" }}>
                Sign in here
              </Link>
            </p>
          </CenteredDiv>
        </div>
      </div>
    </>
  );
};

export default Signup;
