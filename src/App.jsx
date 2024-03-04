import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ÜberMich from "./pages/ÜberMich";
import Kontakt from "./pages/Kontakt";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Project from "./pages/Project";
import Impressum from "./pages/Impressum";
import Agb from "./pages/Abg";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="ÜberMich" element={<ÜberMich />} />
            <Route path="Kontakt" element={<Kontakt />} />
            <Route path="Agb" element={<Agb />} />
            <Route path="Impressum" element={<Impressum />} />
            <Route path="*" element={<NoPage />} />
            <Route path="project/:projectId" element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
