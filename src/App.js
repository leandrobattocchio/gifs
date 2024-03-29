import "App.css";
import { Header } from "components/header/Header";
import { Inicio } from "pages/Inicio";
import { Search } from "pages/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error } from "components/error/Error";
import { VerGif } from "components/vergif/VerGif";

function App() {
  return (
    <div className="App-main">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/gif/:gif/:title" element={<VerGif />} />
          <Route path="*" element={<Error />} />
          <Route path="/search/:keyword/:rating/:languages" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
