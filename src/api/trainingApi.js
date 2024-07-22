import http from "./axiosConfig";

const getUser = (userId) => {
  return http.get(`/api/trainings/${userId}`);
};

const getTrainingsForUser = (userId) => {
  return http.get(`/api/trainings/${userId}/allTrainings`);
};

const getMonthlyTrainings = (userId, year, month) => {
  return http.get(`/api/trainings/monthlyTrainings`, {
    params: {
      userId,
      year,
      month,
    },
  });
};
const addTraining = (userId, training) => {
  return http.post(`/api/trainings/${userId}`, training);
};

export default {
  getUser,
  getTrainingsForUser,
  getMonthlyTrainings,
  addTraining,
};
