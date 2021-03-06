import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dash from "../../components/Dash";
import {
  CenteredDiv,
  FormContainer,
  Input,
  SigninButton,
} from "./Login.styles";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("sds");
    e.preventDefault();
    login(email, password);
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
            <h1>Sign in</h1>
            <h6>Sign in to your account</h6>
            <form onSubmit={handleSubmit}>
              <FormContainer>
                <div>
                  <label htmlFor="email">
                    Email address
                  </label>
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
                  <label htmlFor="password">
                    Password
                  </label>
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
                <SigninButton type="submit">Sign In</SigninButton>
              </FormContainer>
            </form>
            <p>
              don't have an account?{" "}
              <Link to="/signup" style={{ color: "#0D5F9A" }}>
                Sign Up
              </Link>
            </p>
          </CenteredDiv>
        </div>
      </div>
    </>
  );
};

export default Login;
