import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import useAuth, { AuthProvider } from './hooks/useAuth';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';

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
        <Routes>
          <Route
            exact
            path="/"
            element={<AuthenticatedRoute>
              <Home />
            </AuthenticatedRoute>}
          />
          <Route
            exact
            path="/login"
            element={<Login />}
          />
          <Route
            exact
            path="/signup"
            element={<Signup />}
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
