import { Row, Col, Button , Container} from "react-bootstrap";
import styles from "../listProduct/ListProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";


// import ButtonBlack from "../componnet/ButtonBlack";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
// import { app } from "../lib/firebase";
import { ToastContainer, toast } from "react-toastify";
// import { getAuth } from "firebase/auth";
// import { selectUser } from "../store/features/auth/auth.slice";

function Product({ product }) {
//   const user = useSelector(selectUser);

  const dispatch = useDispatch();
//   const auth = getAuth(app);

  const [cart, setCart] = React.useState();
  const [count, setCount] = React.useState(1);
  console.log();

//   const cartRef = collection(getFirestore(app), "store");

//   React.useEffect(() => {
//     const q = query(cartRef);
//     const wishlist = onSnapshot(q, (querySnapshot) => {
//       let data = [];
//       querySnapshot.forEach((doc) => {
//         data.push({ ...doc.data(), id: doc.id });
//       });
//       setCart(data.filter((item) => item.uid == (user && user.uid)));
//     });
//     return () => wishlist();
//   }, [cartRef]);

  const handleAddtoCart = async (product) => {
    // check product exist
    const check = cart.filter(
      (item) => item.uid == user.uid && item.name == product.name
    );

    if (auth.currentUser) {
      if (check.length > 0) {
        const reference = doc(cartRef, check[0].id);
        await updateDoc(reference, {
          quantity: check[0].quantity + count,
        });
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
      } else {
        const reference = doc(cartRef);
        await setDoc(reference, {
          uid: user.uid,
          productId: product.id,
          quantity: count,
          ...product,
        });

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
   
      
        <Link
          className={styles.view}
          href={{
            pathname: "/products/[gid]",
            query: { gid: product.id },
          }}
        >
        <div className='m-2 position-relative'>
              <img src={product.image} alt="" className={styles.image} />
              <div className='m-2'>
                <div className={styles.price_sale}>
                <div className={styles.name_sale}>{product.name}</div>
                  <div className='d-flex ps-2 pb-2 pe-3'>
                    <div className={styles.name}>-67%</div>
                    <div className={styles.price_vnd}>
                      <div>-67%</div>
                      <div>${product.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        
        </Link>

        
      
    
    </>
    // <div className={styles.mB15}>
    //   <div className={styles.cart}>
    //     <Link
    //       className={styles.view}
    //       href={{
    //         pathname: "/products/[gid]",
    //         query: { gid: product.id },
    //       }}
    //     >
    //       <img className={styles.image} src={product.image} alt="" />
    //     </Link>

    //     <div className={styles.molda}>
    //       <div className={styles.hoveritem}>
    //         <div className="">
    //           <span
    //             className={styles.add}
    //             onClick={() => handleAddtoCart(product)}
    //           >
    //             ADD TO CART
    //             <p className={styles.line}></p>
    //           </span>
    //           <Link
    //             className={styles.view}
    //             href={{
    //               pathname: "/products/[gid]",
    //               query: { gid: product.id },
    //             }}
    //           >
                

    //             <p className={styles.line}></p>
    //           </Link>
    //         </div>

    //         <div className=""></div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={styles.mobile}>
    //     <div className={styles.info}>
    //       <p className={styles.name}>{product.name}</p>
    //       <p>${product.price}</p>
    //     </div>
    //     <span onClick={() => handleAddtoCart(product)}>
    //       <Button text="ADD TO CART" />
    //     </span>
    //   </div>
    // </div>
  );
}

export default Product;