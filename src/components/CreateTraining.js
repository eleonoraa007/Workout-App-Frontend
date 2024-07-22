import { useState } from "react";
import api from "../api/trainingApi";
import styles from "./CreateTraining.module.css";

const CreateTraining = ({ userId }) => {
  const [formValues, setFormValues] = useState({
    date: "",
    type: "CARDIO",
    duration: 0,
    caloriesBurned: 0,
    heaviness: 0,
    exhaustion: 0,
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .addTraining(userId, formValues)
      .then((response) => console.log(response.data));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add Training</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Select a type of Training:</label>
          <select
            name="type"
            onChange={handleChange}
            value={formValues.type}
            required
          >
            <option value="BULKING">Bulking</option>
            <option value="CARDIO">Cardio</option>
            <option value="FLEXIBILITY">Flexibility</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Training Date:</label>
          <input
            type="datetime-local"
            name="date"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Duration:</label>
          <input
            style={{ width: "30px" }}
            type="number"
            name="duration"
            placeholder="minutes"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Number of calories burned:</label>
          <input
            style={{ width: "30px" }}
            type="number"
            name="caloriesBurned"
            placeholder="kcal"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Heaviness Level:</label>
          <input
            type="number"
            name="heaviness"
            placeholder="1 (light) - 10 (heavy)"
            onChange={handleChange}
            min={1}
            max={10}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Exhaustion Level:</label>
          <input
            type="number"
            name="exhaustion"
            placeholder="1 (light) - 10 (heavy)"
            onChange={handleChange}
            min={1}
            max={10}
            required
          />
        </div>
        <div className={styles.btnStyle}>
          <button type="submit" className={styles.btn}>
            Add Training
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTraining;
