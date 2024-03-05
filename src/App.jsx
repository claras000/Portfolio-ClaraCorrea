import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ÜberMich from "./pages/ÜberMich";
import Kontakt from "./pages/Kontakt";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Projects from "./pages/Project";
import Impressum from "./pages/Impressum";
import Agb from "./pages/Abg";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="Portfolio-ClaraCorrea" element={<Home />} />
            <Route
              exact
              path="Portfolio-ClaraCorrea/ÜberMich"
              element={<ÜberMich />}
            />
            <Route
              exact
              path="Portfolio-ClaraCorrea/Kontakt"
              element={<Kontakt />}
            />
            <Route exact path="Portfolio-ClaraCorrea/Agb" element={<Agb />} />
            <Route
              exact
              path="Portfolio-ClaraCorrea/Impressum"
              element={<Impressum />}
            />
            <Route exact path="*" element={<NoPage />} />
            <Route
              exact
              path="Portfolio-ClaraCorrea/Projects/:projectId"
              element={<Projects />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
