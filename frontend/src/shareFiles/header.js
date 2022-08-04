import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import logo from "../assets/images/Kadellabs1.png";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link, NavLink ,useNavigate } from "react-router-dom";

const drawerWidth = 240;

const ResponsiveAppBar = (props) => {

  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign:"center"}}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <img src={logo} alt="Kitty Katty!"  />
      </Typography>
      <Divider />
      
      <List>     
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText><NavLink to="/" sx={{color:"black"}}>Home</NavLink></ListItemText>
            </ListItemButton>
          </ListItem>      
      </List>
      <List>     
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText><NavLink to="/SignIn">Sign In</NavLink></ListItemText>
            </ListItemButton>
          </ListItem>      
      </List>
      <List>     
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText><NavLink to="/SignUp">SIgn Up</NavLink></ListItemText>
            </ListItemButton>
          </ListItem>      
      </List>
     
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <AppBar position="static" sx={{background:"#F4FBFF"}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
                      <img src={logo} alt="Kitty Katty!"  />

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{color:"black"}}
            >
              <MenuIcon />
            </IconButton>
            <Box component="nav">
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "block", md:"none", lg:"none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </Box>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
             <img src={logo} alt="Kitty Katty!"  />
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Button onClick={handleCloseNavMenu}  sx={{ my: 2, color: "white", display: "block" }}>
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Home
              </Link>
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "black", display: "block" }}>
              <Link style={{ textDecoration: "none", color: "black" }} to="/SignIn">
                Sign In
              </Link>
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "black", display: "block" }}>
              <Link style={{ textDecoration: "none", color: "black" }} to="/signUp">
                Sign Up
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
