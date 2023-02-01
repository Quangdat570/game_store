// import { Row, Col, Button , Container} from "react-bootstrap";
// import styles from "../listProduct/ListProduct.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import Link from "next/link";

// import React from "react";


// const Product = ({ product }) =>  {

  




 
//   return (

//     <>
   
      
//         <Link
//           className={styles.view}
//           href={{
//             pathname: "/products/[gid]",
//             query: { gid: product.id },
//           }}
//         >
//         <div className='m-2 position-relative'>
//               <img src={product.image} alt="" className={styles.image} />
//               <div className='m-2'>
//                 <div className={styles.price_sale}>
//                 <div className={styles.name_sale}>{product.name}</div>
//                   <div className='d-flex ps-2 pb-2 pe-3'>
//                     <div className={styles.name}>-67%</div>
//                     <div className={styles.price_vnd}>
//                       <div>-67%</div>
//                       <div>${product.price}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

        
//         </Link>

        
      
    
//     </>
//     // <div className={styles.mB15}>
//     //   <div className={styles.cart}>
//     //     <Link
//     //       className={styles.view}
//     //       href={{
//     //         pathname: "/products/[gid]",
//     //         query: { gid: product.id },
//     //       }}
//     //     >
//     //       <img className={styles.image} src={product.image} alt="" />
//     //     </Link>

//     //     <div className={styles.molda}>
//     //       <div className={styles.hoveritem}>
//     //         <div className="">
//     //           <span
//     //             className={styles.add}
//     //             onClick={() => handleAddtoCart(product)}
//     //           >
//     //             ADD TO CART
//     //             <p className={styles.line}></p>
//     //           </span>
//     //           <Link
//     //             className={styles.view}
//     //             href={{
//     //               pathname: "/products/[gid]",
//     //               query: { gid: product.id },
//     //             }}
//     //           >
                

//     //             <p className={styles.line}></p>
//     //           </Link>
//     //         </div>

//     //         <div className=""></div>
//     //       </div>
//     //     </div>
//     //   </div>
//     //   <div className={styles.mobile}>
//     //     <div className={styles.info}>
//     //       <p className={styles.name}>{product.name}</p>
//     //       <p>${product.price}</p>
//     //     </div>
//     //     <span onClick={() => handleAddtoCart(product)}>
//     //       <Button text="ADD TO CART" />
//     //     </span>
//     //   </div>
//     // </div>
//   );
// }

// export default Product;
import React from 'react'

const Product = () => {
  return (
    <div>Product</div>
  )
}

export default Product