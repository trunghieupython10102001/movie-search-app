import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Header } from "./components/header/header";
import "./App.scss";
import { DetailMovie } from "./pages/detail-page/detail-movie";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<DetailMovie />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
