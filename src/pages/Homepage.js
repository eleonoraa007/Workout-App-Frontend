import { NavLink } from "react-router-dom";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.name}>Fitness Tracker</h1>
      <div>
        <h3>Please Register or Login:</h3>
        <div className={styles.div}>
          <NavLink className={styles.link} to="/register">
            Register
          </NavLink>
          <NavLink className={styles.link} to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
