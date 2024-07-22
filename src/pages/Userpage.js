import { NavLink } from "react-router-dom";
import styles from "./Userpage.module.css";

const Userpage = () => {
  return (
    <div className={styles.nav}>
      <NavLink className={styles.link} to="trainings">
        List of Trainings
      </NavLink>
      <NavLink className={styles.link} to="add-training">
        Add Training
      </NavLink>
      <NavLink className={styles.link} to="/user/:userId/monthly-trainings">
        Monthly Trainings
      </NavLink>
    </div>
  );
};
export default Userpage;
