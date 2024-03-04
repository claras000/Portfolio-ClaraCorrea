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
          <Route path="/Portfolio-ClaraCorrea/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route exact path="ÜberMich" element={<ÜberMich />} />
            <Route exact path="Kontakt" element={<Kontakt />} />
            <Route exact path="Agb" element={<Agb />} />
            <Route exact path="Impressum" element={<Impressum />} />
            <Route exact path="*" element={<NoPage />} />
            <Route exact path="project/:projectId" element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
