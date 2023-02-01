
import { IoIosArrowForward} from 'react-icons/io'


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
                <span className={styles.name}>{data.name}</span>
                </div>
             </div>
         </Container>
        <Container fluid className={styles.page}>
          <div  className={styles.bg} id="#">
           
          </div>
          <Container>
              <Row className={styles.mtT80}>
                <div  className="p-0 d-flex">
                  <div className='col-12 col-md-6 d-flex justify-content-center' key={data.id}>
                   <img src={data.image} alt=""  className={styles.img}/>
              
                  </div>
                  <div className="col-12 col-md-6 d-flex justify-content-center">
                  <div>
                      <div className="">
                        <h1 className={styles.name}>{data.name}</h1>
                        <h2 className={styles.price}>${data.price}</h2>
              
                        <div className={styles.flex}>
                          <div className={styles.p}>
                            <p onClick={countDown}>-</p>
                            <p>{quantity}</p>
                            <p onClick={countUp}>+</p>
                          </div>
                          <div className=""  onClick={() => handleAddtoCart(data)}>
                            <Button >Add</Button>
                            <ToastContainer/>
                          </div>
                           
                        </div>
                        <h3 className={styles.h3}>
                          CATEGORY : <i className={styles.cate}>{data.category}</i>{" "}
                        </h3>
                        <h3 className={styles.tag}>
                          TAGS :{"  "}
                          <i className={styles.cate}>
                            Furnishing, Hand made, Utilities
                          </i>
                        </h3>
                        <h3 className={styles.social}>
                          SHARE :{" "}
                          <i className={styles.link}>
                            <Link href="#">FB</Link>
                            <Link href="#">TW</Link>
                            <Link href="#">PIN</Link>
                          </i>
                        </h3>
                      </div>
                    </div>
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




