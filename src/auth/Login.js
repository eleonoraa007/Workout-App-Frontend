import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import authApi from "../api/authApi";
import styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await authApi.login(username, password);
      const userId = response.data.userId;
      login(userId);
      navigate(`/user/${userId}/trainings`);
    } catch (error) {
      setMessage("Login failed. Please try again.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <h2>Please Login:</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className={styles.btnStyle}>
          <button type="submit">Login</button>
        </div>
        {message && <p>{message}</p>}
      </div>
    </form>
  );
};

export default Login;
