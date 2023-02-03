import React,{useState, useEffect} from 'react'
import { Container, Row, Col,Navbar,Offcanvas,Nav} from 'react-bootstrap'
import Link from 'next/link'
import styles from './Header.module.css'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import {
  AppBar,
  Badge,
  Popover,
  
 
  IconButton,
  Input,
  Menu,
  MenuItem,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";



import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import { AiOutlineMenu } from 'react-icons/ai'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../../../lib/firebase'
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../../store/auth.slice";


export default function Header() {
  const logSuccess = () => toast.success("Login successfully");

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  useEffect(() => {
      auth.onAuthStateChanged((auth, error) => {
          if (auth && !user) {
              dispatch(
                  setUser({
                      accessToken: auth.accessToken,
                      uid: auth.uid,
                      displayName: auth.displayName,
                      email: auth.email,
                  })
              );
          } else {
              dispatch(setUser(null));
          }
      });
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorAuth, setanchorAuth] = useState(null);

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClickModalAuth(event) {
    if (anchorAuth !== event.currentTarget) {
      setanchorAuth(event.currentTarget);
    }
  }

  function handleCloseModalAuth() {
    setanchorAuth(null);
  }

  const openAuth = Boolean(anchorAuth);
  const idAuth = openAuth ? "simple-popover" : undefined;

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    dispatch(searchFilterChange(e.target.value));
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'About', 'Games', 'Contact'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <>
    <div className={styles.background}>
       <div className='d-flex justify-content-around pt-3 pb-3 align-items-center'>
    <div className='d-block d-md-none'>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className={styles.btn_nav} onClick={toggleDrawer(anchor, true)}><AiOutlineMenu/></div>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}


    </div>
        <div className='header-logo'>
          <Link href='/' className={styles.logo1}>
            CLOUD
            <span className={styles.logo2}>XGAME</span>
          </Link>
        </div>
        <div className='content d-flex  align-items-center d-none d-sm-block'>
          <div className='menu'>
            <div className={styles.list_menu}>
              <li >
                <Link href='/' className={styles.meme} >Home</Link>
              </li>
              <li >
                <Link href='/about' className={styles.meme}>About</Link>
              </li>
              <li >
                <Link href='/products' className={styles.meme}>Games</Link>
              </li>
              <li >
                <Link href='' className={styles.meme}>Contact</Link>
              </li>
            </div>
          </div>
        </div>
        <div className='search d-flex '>
          <div>
          {!auth.currentUser ? (
                                    // <Button
                                    //     onClick={() => {
                                    //         signInWithPopup(
                                    //             auth,
                                    //             provider
                                    //         ).catch((err) => {
                                    //             console.error(err);
                                    //         });
                                    //     }}
                                    // >
                                    //     Signin
                                    // </Button>
                                    <Button onClick={() => {
                                      signInWithPopup(auth, provider)
                                        .then(() => {
                                          if (auth.currentUser) {
                                            toast.success(`Login successfully`, {
                                              position: "top-right",
                                              autoClose: 5000,
                                              hideProgressBar: false,
                                              closeOnClick: true,
                                              pauseOnHover: true,
                                              draggable: true,
                                              progress: undefined,
                                              theme: "light",
                                            });
                                            router.push("/");
                                          }
                                        })
                                        .catch((err) => console.error(err));
                                    }} >Đăng nhập</Button>
                                ) : (
                                    <div>
                                        {auth.currentUser.displayName}{" "}
                                        <Button onClick={() => auth.signOut()}>
                                            Đăng xuất
                                        </Button>
                                        <ToastContainer/>
                                    </div>
                                )}
           
          </div>
          <div count={0} className={styles.iconCart}>
          <Link href='/cart' className="link">
            <AiOutlineShoppingCart className={styles.cart}/>
           </Link>
          </div>
          
        </div>
      </div>

      

    </div>



    
    </>
  );
}







// const Header = () => {

 
  
//   return (
//     <>
//     <div className={styles.background}>
//       <div className='d-flex justify-content-around pt-3 pb-3 align-items-center'>
//         <div className='header-logo'>
//           <Link href='' className={styles.logo1}>
//             CLOUD
//             <span className={styles.logo2}>XGAME</span>
//           </Link>
//         </div>
//         <div className='content d-flex  align-items-center'>
//           <div className='menu'>
//             <div className={styles.list_menu}>
//               <li >
//                 <Link href='/' className={styles.meme} >Home</Link>
//               </li>
//               <li >
//                 <Link href='' className={styles.meme}>About</Link>
//               </li>
//               <li >
//                 <Link href='/products' className={styles.meme}>Games</Link>
//               </li>
//               <li >
//                 <Link href='' className={styles.meme}>Contact</Link>
//               </li>
//             </div>
//           </div>
//         </div>
//         <div className='search d-flex'>
//           <div>
//             <Link href=''className={styles.login}>Login</Link>
//           </div>
          
//         </div>
//       </div>

      

//     </div>



//     </>
//   )
  
// }

// export default Header