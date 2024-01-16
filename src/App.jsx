import { Routes, Route } from "react-router-dom";
import { TextComponent } from "./Components/TextComponent";
import { StatsComponent } from "./Components/StatsComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TextComponent />} />
        <Route path="/stats" element={<StatsComponent />} />
      </Routes>
    </div>
  );
}

export default App;
