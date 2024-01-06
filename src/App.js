import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <>
      <SideBar></SideBar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
