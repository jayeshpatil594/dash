import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import useAuth, { AuthProvider } from "./hooks/useAuth";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import { Suspense } from "react";
import Spinner from "./components/Spinner";
import { ErrorBoundary } from "./components/ErrorBoundary";

function AuthenticatedRoute({ roles, ...props }) {
  const { user } = useAuth();
  console.log(user);

  if (!user) return <Navigate to="/login" />;

  return props.children;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ErrorBoundary>
                  <AuthenticatedRoute>
                    <Home />
                  </AuthenticatedRoute>
                </ErrorBoundary>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <ErrorBoundary>
                  <Login />
                </ErrorBoundary>
              }
            />
            <Route
              exact
              path="/signup"
              element={
                <ErrorBoundary>
                  <Signup />
                </ErrorBoundary>
              }
            />
          </Routes>
        </Suspense>
      </AuthProvider>
    </Router>
  );
}

export default App;
