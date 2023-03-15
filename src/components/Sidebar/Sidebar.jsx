import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TableChartIcon from "@mui/icons-material/TableChart";
import Face3Icon from '@mui/icons-material/Face3';
import Person3Icon from "@mui/icons-material/Person3"
import { ChildFriendly, Dashboard, FamilyRestroom, MedicalServices } from '@mui/icons-material';
import PeopleIcon from "@mui/icons-material/People"

import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button"

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    if(true) {
     navigate("/login");
   }
 };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" style={{background: "green"}} open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Tsedal OBGYN Clinic
          </Typography>

          <Button 
              variant="contained"
              onClick={handleClick}>Login
          </Button>

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => (navigate("/"))} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <Face3Icon />
                </ListItemIcon>
                <ListItemText primary="Reception" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              
            </ListItem>
          
          {/* Second Side*/}
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => (navigate("/patientrecord"))} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <TableChartIcon />
                </ListItemIcon>
                <ListItemText primary="Patient Record Table" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            {/* Third Side*/}
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => (navigate("/addPatient"))}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AddCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Add Patient" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <Divider />

            {/* Fourth Side - ADMIN */}
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => (navigate("/dashboard"))}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            {/* Fifth Side - ADMIN - STAFF */}
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => (navigate("/staff"))}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Staff" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            {/* ADMIN - View Patient Record */}
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => (navigate("/patientrecord"))} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <TableChartIcon />
                </ListItemIcon>
                <ListItemText primary="Patient Record Table" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <Divider />

            {/* NURSE - View Patient Record */}
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => (navigate("/patientrecord"))} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <Person3Icon />
                </ListItemIcon>
                <ListItemText primary="Patient Record Table" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            {/* NURSE - Add New Born */}
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => (navigate("/addNewBorn"))} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <ChildFriendly />
                </ListItemIcon>
                <ListItemText primary="Add New Born" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            {/* NURSE - Add Family Plan */}
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => (navigate("/addFamilyPlan"))} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <FamilyRestroom />
                </ListItemIcon>
                <ListItemText primary="Add Family Plan" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            {/* NURSE - Add Vital Sign */}
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => (navigate("/addVitalSign"))} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <MedicalServices />
                </ListItemIcon>
                <ListItemText primary="Add Vital Sign" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

        </List>
        <Divider />
        <List>
          
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
      </Box>
    </Box>
  );
}