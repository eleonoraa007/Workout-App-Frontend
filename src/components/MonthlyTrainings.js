import { useState } from "react";
import api from "../api/trainingApi";
import styles from "./MonthlyTrainings.module.css";

const MonthlyTrainings = ({ userId }) => {
  const [trainings, setTrainings] = useState({});
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  const getMonthlyTrainings = () => {
    api
      .getMonthlyTrainings(userId, year, month)
      .then((response) => setTrainings(response.data));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Monthly Trainings</h2>
      <div className={styles.formGroup}>
        <label>Get trainings for:</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="number"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
      </div>
      <button className={styles.btn} onClick={getMonthlyTrainings}>
        Get Trainings
      </button>
      <div>
        {Object.keys(trainings).map((week) => (
          <div key={week}>
            <h3>Week {week}</h3>
            <ul>
              {trainings[week].map((training, index) => (
                <li key={index}>
                  <p>
                    <strong>{training.type}</strong> - {training.duration}{" "}
                    minutes
                  </p>
                  <p>
                    <strong>Calories burned:</strong> {training.caloriesBurned}{" "}
                    kcal
                  </p>
                  <p>
                    <strong>Heaviness:</strong> {training.heaviness}/10
                  </p>
                  <p>
                    <strong>Exhaustion:</strong> {training.exhaustion}/10
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyTrainings;
