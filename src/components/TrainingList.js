import { useContext } from "react";
import { useTrainings } from "../hooks/useTrainings";
import { AuthContext } from "../context/AuthContext";
import styles from "./TrainingList.module.css";

const TrainingList = () => {
  const { userId } = useContext(AuthContext);
  const trainings = useTrainings(userId);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User Trainings</h2>
      <ol>
        {trainings.length > 0 ? (
          trainings.map((training, index) => (
            <li key={index}>
              <p>
                <strong>{training.type}</strong> - {training.duration} minutes
              </p>
              <p>
                <strong>Calories burned:</strong> {training.caloriesBurned} kcal
              </p>
              <p>
                <strong>Heaviness:</strong> {training.heaviness}/10
              </p>
              <p>
                <strong>Exhaustion:</strong> {training.exhaustion}/10
              </p>
            </li>
          ))
        ) : (
          <p>No trainings available</p>
        )}
      </ol>
    </div>
  );
};
export default TrainingList;
