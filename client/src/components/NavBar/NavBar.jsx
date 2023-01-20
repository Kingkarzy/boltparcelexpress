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

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
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
      }}
      padding='1rem 6%'
      backgroundColor={alt}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        gap='1.75rem'
      >
        <Typography
          fontWeight='bold'
          fontSize='clamp(1rem, 2rem, 2.25rem)'
          color='primary'
          onClick={() => navigate('/')}
          sx={{
            '&:hover': {
              color: primaryLight,
              cursor: 'pointer',
            },
          }}
        >
          Bolt Parcel
        </Typography>
      </Box>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
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
            About
          </Typography>
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
            Contact
          </Typography>
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
            Services
          </Typography>
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
            Track
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
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
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

export default Navbar;
