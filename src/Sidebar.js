import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AudiotrackSharpIcon from '@mui/icons-material/AudiotrackSharp';
import CloudOffSharpIcon from '@mui/icons-material/CloudOffSharp';
import NetworkWifi2BarSharpIcon from '@mui/icons-material/NetworkWifi2BarSharp';
import ContactMailSharpIcon from '@mui/icons-material/ContactMailSharp';
import DvrSharpIcon from '@mui/icons-material/DvrSharp';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import { Routes, Route } from "react-router-dom";
import Audio from "./Pages/Audio";
import Video from "./Pages/Video";
import Contact from "./Pages/Contact";
import Announcement from "./Pages/Announcement";
import MCQ from "./Pages/MCQ";
import Offline_exam from "./Pages/Offline_exam";
import OnLine_Exam from "./Pages/OnLine_Exam";
import Portfolio from './Pages/Portfolio';




import "./Sidebar.css";
import {NavLink} from 'react-router-dom'
import Notes from './Pages/Notes';


const drawerWidth = 240;
 const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    paddingTop: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
 

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            RANJEET JAYSWAL
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            border:"1px solid blue",
            background:" lightblue",
            color:"#fff",

          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem  button  style={{margin:"0px 10px 10px 0px",backgroundColor:"#d2dbda",padding:"1rem",border:"1px solid"}} >
          <ListItemIcon><MenuBookIcon /></ListItemIcon><NavLink  style={{listStyle:"none",width:"100rem"}} activeClassName="active" to="/">PORTFOLIO</NavLink ></ListItem>
        <ListItem  button  style={{margin:"0px 10px 10px 0px",backgroundColor:"#d2dbda",padding:"1rem",border:"1px solid"}} >
          <ListItemIcon><AudiotrackSharpIcon /></ListItemIcon><NavLink  style={{listStyle:"none",width:"100rem"}}  activeClassName="active"to="/Notes">NOTES</NavLink ></ListItem>
        <ListItem button style={{margin:"0px 10px 10px 0px",backgroundColor:"#d2dbda",padding:"1rem",border:"1px solid"}}>
          <ListItemIcon><VideoLibrarySharpIcon /></ListItemIcon><NavLink  style={{listStyle:"none",width:"100rem"}} activeClassName="active" to="/video">VIDEO</NavLink ></ListItem>
        <ListItem button  style={{margin:"0px 10px 10px 0px",backgroundColor:"#d2dbda",padding:"1rem",border:"1px solid"}}>
          <ListItemIcon><DvrSharpIcon /></ListItemIcon><NavLink  style={{listStyle:"none",width:"100rem"}}  activeClassName="active"to="/Mcq">MCQ</NavLink ></ListItem>
        <ListItem button style={{margin:"0px 10px 10px 0px",backgroundColor:"#d2dbda",padding:"1rem",border:"1px solid"}} >
          <ListItemIcon><CloudOffSharpIcon /></ListItemIcon><NavLink  style={{listStyle:"none",width:"100rem"}} activeClassName="active" to="/Offline_Exam">OFFLINE EXAM</NavLink ></ListItem>
        <ListItem button  style={{margin:"0px 10px 10px 0px",backgroundColor:"#d2dbda",padding:"1rem",border:"1px solid"}} >
          <ListItemIcon><NetworkWifi2BarSharpIcon /></ListItemIcon><NavLink  style={{listStyle:"none",width:"100rem"}}  activeClassName="active"to="/Online_exam">ON LINE EXAM </NavLink ></ListItem>
        <ListItem button  style={{margin:"0px 10px 10px 0px",backgroundColor:"#d2dbda",padding:"1rem",border:"1px solid"}} >
          <ListItemIcon><ContactMailSharpIcon /></ListItemIcon><NavLink  style={{listStyle:"none",width:"100rem"}} activeClassName="active" to="/Announcement">Announcement</NavLink ></ListItem >
        <ListItem button  style={{margin:"0px 10px 10px 0px",backgroundColor:"#d2dbda",padding:"1rem",border:"1px solid"}} >
          <ListItemIcon><ContactMailSharpIcon /></ListItemIcon><NavLink  style={{listStyle:"none",width:"100rem"}} activeClassName="active" to="/contact">Contact</NavLink ></ListItem>
          <ListItem button  style={{margin:"0px 10px 10px 0px",backgroundColor:"#d2dbda",padding:"1rem",border:"1px solid"}} >
          <ListItemIcon><ContactMailSharpIcon /></ListItemIcon><NavLink  style={{listStyle:"none",width:"100rem"}} activeClassName="active" to="/Audio">AUDIO</NavLink ></ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
        <Routes>
                <Route index element={<Portfolio />} />
                <Route path="Notes" element={<Notes/>} />
                <Route path="Video" element={<Video />} />
                <Route path="Announcement" element={<Announcement />} />
                <Route path="MCQ" element={<MCQ />} />
                <Route path="OnLine_Exam" element={<OnLine_Exam />} />
                <Route path="Offline_exam" element={<Offline_exam />} />
                <Route path="contact" element={<Contact />} />
                <Route path="Audio" element={<Audio/>} />
       </Routes> 
         
        </Typography>
      </Main>
    </Box>
  );
}
