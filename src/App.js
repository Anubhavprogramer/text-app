import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/about";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light"); //weather the dark mode is enable or not
  const [alert, setalert] = useState(null);
  const setAlert = (messege, type) => {
    setalert({
      msg: messege,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const Togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      setAlert("Change to Dark mode", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      setAlert("Change to light mode", "success");
    }
  };
  return (
    <>
    <Router>
    <Navbar
      tittle="Anubhav's website"
      home="Text Uttils"
      mode={mode}
      Togglemode={Togglemode}
    />
        <Alert alert={alert} />
      <Routes>
        <Route exact path="/" element={<About mode={mode}/>}>
        </Route>
        <Route exact path="/Textform" element={<Textform
        setAlert={setAlert}
        heading="Enter The Text To Analyse "
        mode={mode}/>}>
        </Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
