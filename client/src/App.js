import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material"; 
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";


function App() {
  const isAuth = Boolean(useSelector((state) => state.token)); 
  return (
    <div className="App">
     
   </div>
  );
}

export default App;
