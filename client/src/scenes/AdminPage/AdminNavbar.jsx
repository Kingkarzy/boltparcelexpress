import { useState } from 'react';
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] =
    useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery('(min-width: 1024px)');

  const theme = useTheme();
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      padding='1rem 6%'
      backgroundColor={alt}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
          marginBottom: '1rem !important',
        }}
        gap='1.75rem'
      >
        <Typography
          fontWeight='bold'
          fontSize='clamp(1rem, 1.6rem, 2.2rem)'
          color='#CCAF2D'
        >
          Dashboard
        </Typography>
      </Box>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          gap='2rem'
        >
          <Typography
            fontWeight='bold'
            // color='primary'
            onClick={() => navigate('/')}
            sx={{
              '&:hover': {
                color: '#00D5FA',
                cursor: 'pointer',
              },
            }}
          >
            Home
          </Typography>
          <Typography
            fontWeight='bold'
            // color='primary'
            onClick={() => navigate('/about')}
            sx={{
              '&:hover': {
                color: '#00D5FA',
                cursor: 'pointer',
              },
            }}
          >
            View All Packages
          </Typography>
          <Typography
            fontWeight='bold'
            // color='primary'
            onClick={() => navigate('/contact')}
            sx={{
              '&:hover': {
                color: '#00D5FA',
                cursor: 'pointer',
              },
            }}
          >
            Add a Package
          </Typography>
          <Typography
            fontWeight='bold'
            // color='primary'
            onClick={() => navigate('/services')}
            sx={{
              '&:hover': {
                color: '#00D5FA',
                cursor: 'pointer',
              },
            }}
          >
            Edit A Package
          </Typography>
          <Typography
            fontWeight='bold'
            // color='primary'
            onClick={() => navigate('/track')}
            sx={{
              '&:hover': {
                color: '#00D5FA',
                cursor: 'pointer',
              },
            }}
          >
            Delete A Package
          </Typography>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === 'dark' ? (
              <DarkMode sx={{ fontSize: '25px' }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: '25px' }} />
            )}
          </IconButton>
        </Box>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position='fixed'
          right='0'
          bottom='0'
          height='100%'
          zIndex='10'
          maxWidth='500px'
          minWidth='300px'
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box
            display='flex'
            justifyContent='flex-end'
            p='1rem'
          >
            <IconButton
              onClick={() =>
                setIsMobileMenuToggled(!isMobileMenuToggled)
              }
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            gap='3rem'
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: '25px' }}
            >
              {theme.palette.mode === 'dark' ? (
                <DarkMode sx={{ fontSize: '25px' }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: '25px' }} />
              )}
            </IconButton>
            <Notifications sx={{ fontSize: '25px' }} />
            <Help sx={{ fontSize: '25px' }} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AdminNavbar;
