import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Checkout.module.css";
import { Container, Row, Col } from "react-bootstrap";
// import Sologan from "../componnet/Sologan";
import { style } from "@mui/system";
import { useForm } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

import { AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import Link from "next/link";

import {
    Box,
    Button,
    
    Grid,
    Modal,
    Stack,
    styled,
    TextField,
    Typography,
  } from "@mui/material";


import { useDispatch, useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
// import ButtonBlack from "../componnet/ButtonBlack";
import { getAuth } from "firebase/auth";
import { selectUser } from "../../store/auth.slice";
import React from "react";
import { useRouter } from "next/router";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { app } from "../../lib/firebase";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

function CheckBox() {
  const router = useRouter();
  const [carts, setCart] = React.useState([]);
  const auth = getAuth(app);
  const user = useSelector(selectUser);
  const cartRef = collection(getFirestore(app), "store");

  React.useEffect(() => {
    const q = query(cartRef);
    onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setCart(data.filter((item) => item.uid == (user && user.uid)));
    });
  }, [user == null ? null : user.uid]);

  const deleteAll = async (id) => {
    const reference = doc(cartRef, id);
    await deleteDoc(reference);
  };

  const clearCart = () => {
    carts.forEach((item) => deleteAll(item.id));
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {},
  });

  const city = register("city", {
    required: "Please fill out this field.",
    validate: {
      length: (v) =>
        (2 <= v.toLowerCase().trim().length &&
          v.toLowerCase().trim().length <= 50) ||
        "Please enter your city",
    },
  });

  const address = register("address", {
    required: "Please fill out this field.",
    validate: {
      length: (v) =>
        (6 <= v.toLowerCase().trim().length &&
          v.toLowerCase().trim().length <= 50) ||
        "Please enter your address",
    },
  });

  const first = register("first", {
    required: "Please fill out this field.",
    validate: {
      length: (v) =>
        (2 <= v.toLowerCase().trim().length &&
          v.toLowerCase().trim().length <= 50) ||
        "Please enter your name",
    },
  });

  const email = register("email", {
    required: "Please fill out this field.",
    validate: {
      isEmail: (v) =>
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "Please enter an email address.",
    },
  });

  const phone = register("phone", {
    required: "Please fill out this field.",
    validate: {
      isEmail: (v) =>
        isValidPhoneNumber(v) || "Please enter your phone number.",
    },
  });

  return (
    <>
    <Container fluid className={styles.bg_banner}>
           <div className={styles.breadcump}>
               <div className={styles.title_breadcump}>GAMES</div>
               <div className={styles.acb}>Cloux 
                 <span><IoIosArrowForward/></span> 
                <span className={styles.name_header}>Checkout</span>
                </div>
             </div>
         </Container>
    <Container fluid className={styles.page}>
      

      <section className={styles.mT80}>
        {auth.currentUser && carts.length !== 0 ? (
          <Container>
            <form
              action=""
              onSubmit={handleSubmit((data) => {
                Swal.fire({
                  title: "Are you sure you want to order?",
                  icon: "question",
                  iconHtml: "?",
                  confirmButtonText: "Yes",
                  cancelButtonText: "No",
                  showCancelButton: true,
                  showCloseButton: true,
                  width: "50rem",
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire({
                      title: " Order Success",
                      showConfirmButton: false,
                      timer: 1500,
                      icon: "success",
                      width: "50rem",
                      he,
                    });
                    const reference = collection(getFirestore(app), "checkout");
                    addDoc;
                    clearCart();
                    router.push("/cart");
                  }
                });
              })}
            >
              <Row>
                <Col lg={6}>
                  <h2 className={styles.title_check}>Contact information</h2>
                  <div className={styles.form}>
                    <div className="">
                      <div className="">
                        <label htmlFor="first"> Your name </label>
                        <input {...first} type="text" name="first" />
                      </div>
                      <p className={styles.error}> {errors.first?.message}</p>
                    </div>

                    <div className="">
                      <div className="">
                        <label htmlFor="Company">Company name (optional)</label>
                        <input type="text" name="Company" />
                      </div>
                    </div>

                    <div className="" style={{ display: "flex", gap: "1rem" }}>
                      <div className="" style={{ margin: 0 }}>
                        <div className="">
                          <label htmlFor="city">Town / City</label>
                          <input {...city} type="text" name="city" />
                        </div>
                        <p className={styles.error}> {errors.city?.message}</p>
                      </div>

                      <div className="" style={{ margin: 0 }}>
                        <div className="">
                          <label htmlFor="address">Street address</label>
                          <input {...address} type="text" name="address" />
                        </div>
                        <p className={styles.error}>
                          {" "}
                          {errors.address?.message}
                        </p>
                      </div>
                    </div>

                    <div className="">
                      <div className="">
                        <label htmlFor="phone">Phone *</label>
                        <input
                          {...phone}
                          type="text"
                          name="phone"
                          placeholder="+84"
                        />
                      </div>
                      <p className={styles.error}> {errors.phone?.message}</p>
                    </div>

                    <div className="">
                      <div className="">
                        <label htmlFor="email">Email address *</label>
                        <input {...email} type="email" name="email" />
                      </div>
                      <p className={styles.error}> {errors.email?.message}</p>
                    </div>
                    <div className="">
                      <div className="">
                        <label htmlFor="visa">Visa Card</label>
                        <input
                          type="text"
                          className="input"
                          name="visa"
                          placeholder=""
                          {...register("visanumber", {
                            required: "Please enter this field!",
                            pattern: {
                              value:
                                /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                              message: "This field must be visa number!",
                            },
                          })}
                        />
                      </div>
                      {errors.visanumber && (
                        <div className={styles.error}>
                          {errors.visanumber.message}
                        </div>
                      )}
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                 
                    {carts.map((item) => (
                        <div className="col-12 d-flex p-4 border position-relative align-items-center mt-3">
                        <div className="col-4 d-flex justify-content-center">
                        <img src={item.image} alt="" className={styles.img_products} />
                        </div>
                        
                        <div className="col-6 d-flex justify-content-center align-items-center">
                            <div className={styles.name_products}>{item.name}</div>
                        </div>
                        <div className="col-2 d-flex justify-content-center">
                            <div className={styles.price_products}>${item.price}</div>
                        </div>
                            
                        
                       
                         
                      
                      </div>
                    ))}
                </Col>
              </Row>
              <Box
              sx={{paddingTop:'20px', paddingBottom:"20px"}}
              ><Button variant="contained" >ORDER NOW</Button></Box>
            </form>
          </Container>
        ) : (
          <></>
        )}
      </section>
    </Container>
    </>
  );
}

export default CheckBox;