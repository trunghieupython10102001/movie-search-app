import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Header } from "./components/header/header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-page">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
