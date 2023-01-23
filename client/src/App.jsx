import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from 'scenes/HomePage/HomePage';
import LoginPage from 'scenes/LoginPage/LoginPage';
import About from 'scenes/About/About';
import Contact from 'scenes/Contact/Contact';
import Services from 'scenes/Services/Services';
import Track from 'scenes/Track/Track';
import Home from 'scenes/HomePage/Home';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import AdminPage from 'scenes/AdminPage/AdminPage';
import Navbar from 'components/NavBar';
import './styles/bootstrap.css';
import './styles/chocolat.css';
import './styles/flexslider.css';
import './styles/font-awesome.css';
import './styles/JiSlider.css';
import './styles/style.css';
import './styles/table.css';
import Footer from 'components/Footer';


function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/about'
              element={<About />}
            />
            <Route
              path='/contact'
              element={<Contact />}
            />
            <Route
              path='/services'
              element={<Services />}
            />
            <Route
              path='/track'
              element={<Track />}
            />
            <Route
              path='/admin900'
              element={<LoginPage />}
            />
            <Route
              path='/admin-Dashboard'
              element={isAuth ? <AdminPage /> : <Navigate to='/' />}
            />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
