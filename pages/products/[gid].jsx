
import { IoIosArrowForward, IoMdTime} from 'react-icons/io'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { AiFillTags, AiOutlineShareAlt } from 'react-icons/ai'
import { RiComputerLine } from 'react-icons/ri'
import { BsFlagFill, BsFillShareFill} from 'react-icons/bs'



import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ProductDetail.module.css";
import 'react-toastify/dist/ReactToastify.css';

import { style } from "@mui/system";
import Link from "next/link";
import { addItem } from "../../store/features/cart/cart.slice";
import { ToastContainer } from "react-toastify";
import { selectProductById } from "../../store/features/Product.slice";


import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { app } from "../../lib/firebase";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { selectUser } from "../../store/auth.slice"
const ItemDetail = ({ data }) => {
  const auth = getAuth(app);
  const user = useSelector(selectUser);
  const [cart, setCart] = React.useState([]);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(1);
  const product = useSelector(selectProductById(data.id));

  const countUp = () => {
    setQuantity(quantity + 1);
  };

  const countDown = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (quantity === 1) {
      return quantity;
    }
  };

  // const handleAddToCartClick = (productId) => {
  //   dispatch(addItem({ productId: productId, quantity: quantitys }));
  // };
  // console.log(quantitys);
  // console.log(product);

  // add to cart
  const cartRef = collection(getFirestore(app), "store");

  React.useEffect(() => {
    const q = query(cartRef);
    const wishlist = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setCart(data.filter((item) => item.uid == (user && user.uid)));
    });
    return () => wishlist();
  }, []);

  const handleAddtoCart = async (product) => {
    
    // check product exist
    const check = cart.filter(
      (item) => item.uid == user.uid && item.name == product.name
    );

    if (auth.currentUser) {
      if (check.length > 0) {
        toast.success(`${product.name} added to cart successfully`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const reference = doc(cartRef, check[0].id);
        await updateDoc(reference, {
          quantity: check[0].quantity + quantity,
        });
        console.log("success");
      } else {
        console.log("fail")
        toast.success(`${product.name} added to cart successfully`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const reference = doc(cartRef);
        await setDoc(reference, {
          uid: user.uid,
          productId: product.id,
          quantity: quantity,
          ...product,
        });

      }
    } else {
      toast.warning(`You need to login to perform this function`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (

<>
    <Container fluid className={styles.bg_banner}>
           <div className={styles.breadcump}>
               <div className={styles.title_breadcump}>GAMES</div>
               <div className={styles.acb}>Cloux 
                 <span><IoIosArrowForward/></span> 
                <span className={styles.name_header}>{data.name}</span>
                </div>
             </div>
         </Container>
        <Container fluid className={styles.page}>
          <div  className={styles.bg} id="#">
           
          </div>
          <Container>
              <Row className={styles.mtT80}>
                
                  <div className='col-12 col-md-8 d-flex justify-content-center' key={data.id}>
                   <img src={data.description} alt=""  className={styles.img}/>
              
                  </div>
                  <div className="col-12 col-md-4 d-flex justify-content-center flex-column ps-5 pe-5">
                      
                        <h1 className={styles.name}>{data.name}</h1>
                        <div className=''>
                          <span className={styles.icon_price}><FaMoneyCheckAlt/></span>
                          <span className={styles.price}>${data.price}</span>
                          </div>
              
                        <div >

                        <div className={styles.magrin}>
                          <span className={styles.icon_cate}><AiFillTags/></span>
                          <span className={styles.title_cate}>{data.categories}</span>
                        </div>

                        <div className={styles.magrin}>
                          <span className={styles.icon_cate}><IoMdTime/></span>
                          <span className={styles.title_cate}>August 15, 2017</span>
                        </div>

                        <div className={styles.magrin}>
                          <span className={styles.icon_cate}><RiComputerLine/></span>
                          <span className={styles.title_cate}>SteamUplay</span>
                        </div>
                          {/* <div className={styles.p}>
                            <p onClick={countDown}>-</p>
                            <p>{quantity}</p>
                            <p onClick={countUp}>+</p>
                          </div> */}
                          <div  onClick={() => handleAddtoCart(data)}>
                            <div className={styles.button_add} >Add to cart</div>
                            <ToastContainer/>
                          </div>
                           
                        </div>
                       
                        
                        <div className='d-flex justify-content-between'>
                          <div className={styles.lay}>
                            <div className={styles.icon_share}><BsFillShareFill/></div>
                            <div className={styles.title_share}>Share</div>
                          </div>
                          <div className={styles.lay}>
                            <span className={styles.icon_share}><BsFlagFill/></span>
                            <span className={styles.title_share}>Report</span>
                          </div>
                        </div>
                      
                  
                  </div>

                  <div className='col-12 col-md-8 '>
                    <div className={styles.content_product}>
                      
                        Welcome to Yara, a tropical paradise frozen in time. As the dictator of Yara, Antón Castillo is intent on restoring his nation to its former glory by any means necessary, with his son, Diego, following in his bloody footsteps. Their oppressive rule has ignited a revolution. Play as Dani Rojas, a local Yaran, as you fight alongside a modern-day guerrilla revolution to liberate Yara. Play the full game solo or with a friend in co-op. Explore jungles, beaches, and cities on foot, horseback, or in a wide variety of vehicles including boats and Jet Skis as you fight against Castillo’s regime in the most expansive Far Cry to date. Feel the thrill of combat with an arsenal of hundreds of weapons alongside helpful amigos like Chorizo the dog and Guapo the gator. Enjoy all-new content and features added since launch, including four new special operations, free blockbuster crossover missions, and fan-requested updates such as New Game Plus, Completionist Aid, an extra-hard difficulty mode, and four new loadout slots. There has never been a better time to join millions of players in Yara!

                    </div>

                    <div className='p-2'>
                      <h3 className={styles.title_info}>SYSTEM REQUIREMENTS</h3>
                      <Row className=' '>
                        <div className=' col-12 col-md-6 pe-2 pt-5'>
                          <div className={styles.header_info}>MINIMUM:</div>
                          <div className='d-flex pt-2'>
                            <div><span  className={styles.os}>OS: </span>
                            <span className={styles.info}> Windows 10 (20H1 or newer) – 64 bit only</span>
                            </div>
                          </div>

                          <div className='d-flex pt-2'>
                            <div ><span className={styles.os}>Processor: </span>
                            <span className={styles.info}> AMD Ryzen 3 1200 – 3.1 GHz / Intel i5-4460 – 3.2 GHz</span>
                            </div>
                          </div>

                          <div className='d-flex pt-2'>
                            <div ><span className={styles.os}>Memory: </span>
                            <span className={styles.info}> 8 GB (Dual-Channel mode)</span>
                            </div>
                          </div>

                          <div className='d-flex pt-2'>
                            <div ><span className={styles.os}>Storage: </span>
                            <span className={styles.info}> 60 GB HDD (SSD recommended)</span>
                            </div>
                          </div>

                          <div className='d-flex pt-2'>
                            <div ><span className={styles.os}>Direct X: </span>
                            <span className={styles.info}> DirectX 12</span>
                            </div>
                          </div>

                          <div className='d-flex pt-2'>
                            <div ><span className={styles.os}>Graphics: </span>
                            <span className={styles.info}> AMD RX 460 (4 GB) / Nvidia GTX 960 (4 GB)</span>
                            </div>
                          </div>
                        </div>

                        <div className=' col-12 col-md-6 pt-5'>
                          <div  className={styles.header_info}>RECOMMENDED:</div>
                          <div className='d-flex pt-2'>
                            <div><span  className={styles.os}>OS: </span>
                            <span className={styles.info}> Windows 10 (20H1 or newer) – 64 bit only</span>
                            </div>
                          </div>

                          <div className='d-flex pt-2'>
                            <div ><span className={styles.os}>Processor: </span>
                            <span className={styles.info}> AMD Ryzen 5 3600X (3.8 GHz) / Intel i7-7700 (3.6 GHz) or higher</span>
                            </div>
                          </div>

                          <div className='d-flex pt-2'>
                            <div ><span className={styles.os}>Memory: </span>
                            <span className={styles.info}> 16 GB (Dual-Channel mode)</span>
                            </div>
                          </div>

                          <div className='d-flex pt-2'>
                            <div ><span className={styles.os}>Storage: </span>
                            <span className={styles.info}> 60 GB HDD (SDD Recommended) + 37 GB HD Textures (optional)</span>
                            </div>
                          </div>

                          <div className='d-flex pt-2'>
                            <div ><span className={styles.os}>Direct X: </span>
                            <span className={styles.info}> DirectX 12</span>
                            </div>
                          </div>

                          <div className='d-flex pt-2'>
                            <div ><span className={styles.os}>Graphics: </span>
                            <span className={styles.info}> AMD RX VEGA64 (8 GB) / Nvidia GTX 1080 (8 GB) or higher</span>
                            </div>
                          </div>
                        </div>
                        
                      </Row>
                    </div>
                  </div>
                
              </Row>
          </Container>
        </Container>

</>
        
  );
};

export default ItemDetail;

//staticPath - Có bao nhiêu sản phẩm
export const getStaticPaths = async () => {
  const res = await fetch(
    "https://63d729ad5dbd723244211e09.mockapi.io/products"
  );
  const data = await res.json();

  return {
    paths: data.map((item) => ({ params: { gid: item.id } })),
    fallback: false,
  };
};

// staticProps - thông tin cụ thể 1 sản phẩm là gì
export const getStaticProps = async (context) => {
  const productId = context.params.gid;

  const res = await fetch(
    "https://63d729ad5dbd723244211e09.mockapi.io/products/" + productId
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};




