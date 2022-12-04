import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./hooks";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import Burger from "./components/Burger";
import Menu from "./components/Menu";
import FocusLock from "react-focus-lock";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Aim from "./pages/Aim";
import Theory from "./pages/Theory";
import Execution from "./pages/Execution";
import About from "./pages/About";
import Playfair from "./components/Playfair";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <React.Fragment>
      <Router>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <div>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </div>
          </>
        </ThemeProvider>
        <Routes>
          <Route path="/" element={<Aim />} />
          <Route path="/theory" element={<Theory />} />
          <Route path="/execution" element={<Playfair />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
