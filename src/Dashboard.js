import { Route, Routes } from "react-router-dom";
import TrainingList from "./components/TrainingList";
import CreateTraining from "./components/CreateTraining";
import MonthlyTrainings from "./components/MonthlyTrainings";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Userpage from "./pages/Userpage";

const Dashboard = () => {
  const { userId } = useContext(AuthContext);
  return (
    <div>
      <Userpage />
      <Routes>
        <Route path="trainings" element={<TrainingList />} />
        <Route path="add-training" element={<CreateTraining />} />
        <Route path="monthly-trainings" element={<MonthlyTrainings />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
