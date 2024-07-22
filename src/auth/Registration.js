import { useState } from "react";
import authApi from "../api/authApi";
import styles from "./Registration.module.css";
import { NavLink } from "react-router-dom";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await authApi.register(username, password);
      setMessage("Registration successful");
    } catch (error) {
      setMessage("Registration failed: " + error);
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleRegister}>
        <h2>Please Register:</h2>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.btnStyle}>
          <button type="submit">Register</button>
          {message && <p>{message}!</p>}
        </div>
        <div className={styles.loginLink}>
          <p>Already have an account? Login here: </p>
          <NavLink className={styles.link} to="/login">
            Login
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Registration;
