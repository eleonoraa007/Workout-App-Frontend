import { useEffect, useState } from "react";
import api from "../api/trainingApi";

export const useTrainings = (userId) => {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    const getTrainings = async () => {
      try {
        if (!userId) {
          console.log("no userid provided");
        }
        const response = await api.getTrainingsForUser(userId);
        setTrainings(response.data);
      } catch (err) {
        setTrainings([]);
      }
    };
    getTrainings();
  }, [userId]);

  return trainings;
};
