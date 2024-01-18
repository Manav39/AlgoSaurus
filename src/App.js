import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SideBar><Home /></SideBar>} />
    </Routes>
  );
}

export default App;
