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
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";




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
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";

import { loadProduct } from '../../../store/features/Product.slice'


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

  React.useEffect(() => {
    dispatch(loadProduct({ productId: 1 }));
  }, []);


  const [carts, setCart] = React.useState([]);

  const cartRef = collection(getFirestore(app), "store");
  React.useEffect(() => {
    const q = query(cartRef);
    const cartlist = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setCart(data.filter((item) => item.uid == (user && user.uid)));
    });

    return () => cartlist();
  }, [user == null ? null : user.uid]);

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
                                    }} >Login</Button>
                                ) : (
                                    // <div>
                                    //     {auth.currentUser.displayName}{" "}
                                    //     <Button onClick={() => auth.signOut()}>
                                    //         Đăng xuất
                                    //     </Button>
                                    //     <ToastContainer/>
                                    // </div>
                                    <Box>
                      <IconButton
                        aria-describedby={auth}
                        onClick={handleClickModalAuth}
                        sx={{ position: "relative" }}
                      >
                        <PersonIcon sx={{fontSize:'25px'}} />
                        <Popover
                          id={idAuth}
                          open={openAuth}
                          anchorEl={anchorAuth}
                          onClose={handleCloseModalAuth}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                          sx={{
                            position: "absolute",
                            top: "14px",
                            left: "-70px",
                          }}
                        >
                          <Stack>
                            <Link
                              href=""
                              className={styles.under}
                              
                            >
                              <Button sx={{color:'#000', borderBottom:'1px solid #727272'}}>{auth.currentUser.displayName}</Button>
                            </Link>

                            <Button
                            sx={{color:'#000'}}
                              // variant="contained"
                              onClick={() => auth.signOut()}
                            >
                              Log out
                            </Button>
                          </Stack>
                        </Popover>
                      </IconButton>
                    </Box>
                                )}
           
          </div>

          <div className={styles.p8}>
            {auth.currentUser && carts.length === 0 ? (
                <div className={styles.iconCart} count={0}>
                  <Link href="/cart" className="link">
                    <ShoppingCartTwoToneIcon className={styles.cart} />
                  </Link>
                </div>
              ) : (
                <>
                  {" "}
                  <div className={styles.iconCart} count={carts.length}>
                    <Link href="/cart" className="link">
                      <ShoppingCartTwoToneIcon className={styles.cart} />
                    </Link>
                  </div>
                </>
              )}
          </div>
          {/* <Stack sx={{padding:'8px'}}>
                  <Link href="/cart">
                   <Badge
                     badgeContent={carts.reduce(
                       (total, cur) => (total += cur.quantity),
                       0
                     )}
                     color="secondary"
                   >
                     <ShoppingCartOutlinedIcon sx={{ color: "#757575" }} />
                   </Badge>
                 </Link>
                 

          </Stack> */}
          {/* <Link href='/cart' className="link">
            <AiOutlineShoppingCart className={styles.cart}/>
           </Link> */}
          
          
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