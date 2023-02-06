import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    TextField,
    Typography,
  } from "@mui/material";
  import Link from "next/link";
  import React from "react";
  
  import { useForm } from "react-hook-form";
  import { isValidPhoneNumber } from "react-phone-number-input";
  
  import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    updateProfile,
  } from "firebase/auth";
  import { app } from "../../lib/firebase";
  import { collection, getDoc, getFirestore, setDoc } from "firebase/firestore";
  
  import { ToastContainer, toast } from "react-toastify";
  import { useRouter } from "next/router";
  
  const Signup = () => {
    const {
      reset: reset2,
      register: register2,
      handleSubmit: handleSubmit2,
      getValues,
      formState: { errors: errors2, isSubmitSuccessful },
    } = useForm({
      mode: "onChange",
      defaultValues: {},
    });
  
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const router = useRouter();
  
    const name = register2("name", {
      required: "Please fill out this field.",
      validate: {
        length: (v) =>
          (6 <= v.toLowerCase().trim().length &&
            v.toLowerCase().trim().length <= 50) ||
          "Name must be between 6 and 50 characters long",
      },
    });
  
    const mail = register2("mail", {
      required: "Please fill out this field.",
      validate: {
        isEmail: (v) =>
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "Please enter an email address.",
      },
    });
  
    const password = register2("password", {
      required: "Please fill out this field.",
      validate: {
        length: (v) =>
          (4 <= v.length && v.length <= 30) ||
          "Password must be between 4 and 20 characters long",
      },
    });
  
    const rePassword = register2("rePassword", {
      required: "Please confirm password",
      deps: ["password"],
      validate: {
        match: (v) =>
          v === getValues("password") || "Confirm password does not match",
      },
    });
  
    return (
      <>
        <Box
          sx={{
            marginTop: "95px",
            maxWidth:'420px',
            marginRight: "auto",
            marginLeft: "auto",
            borderRadius: "10px",
            boxShadow: "0px 8px 45px rgb(3 0 71 / 9%)",
            padding: "32px 48px",
            marginBottom:"95px"
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              fontFamily: "'Kodchasan', sans-serif",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            Create Your Account
          </Typography>
  
          <form
            key={2}
            onSubmit={handleSubmit2((data) => {
              createUserWithEmailAndPassword(auth, data.mail, data.password)
                .then(() => {
                  updateProfile(auth.currentUser, {
                    displayName: data.name,
                  });
  
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
                  reset2();
                  router.push("/");
                })
                .catch(function (error) {
                  toast.error(`Account already exists`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                });
            })}
          >
            <Box
              sx={{
                marginBottom: "20px",
                input: { fontFamily: "'Kodchasan', sans-serif" },
              }}
            >
              <TextField
                id="outlined-basic"
                label="Full name"
                variant="outlined"
                autoFocus
                fullWidth
                {...name}
              />
              <Typography
                sx={{
                  color: "red",
                  fontFamily: "'Kodchasan', sans-serif",
                  fontSize: "14px",
                }}
              >
                {errors2.name?.message}
              </Typography>
            </Box>
  
            <Box
              sx={{
                marginBottom: "20px",
                input: { fontFamily: "'Kodchasan', sans-serif" },
              }}
            >
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                {...mail}
              />
              <Typography
                sx={{
                  color: "red",
                  fontFamily: "'Kodchasan', sans-serif",
                  fontSize: "14px",
                }}
              >
                {errors2.mail?.message}
              </Typography>
            </Box>
  
            <Box
              sx={{
                marginBottom: "30px",
                input: { fontFamily: "'Kodchasan', sans-serif" },
              }}
            >
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                {...password}
              />
              <Typography
                sx={{
                  color: "red",
                  fontFamily: "'Kodchasan', sans-serif",
                  fontSize: "14px",
                }}
              >
                {errors2.password?.message}
              </Typography>
            </Box>
  
            <Box
              sx={{
                marginBottom: "20px",
                input: { fontFamily: "'Kodchasan', sans-serif" },
              }}
            >
              <TextField
                id="outlined-basic"
                label="Retype Password"
                variant="outlined"
                type="password"
                fullWidth
                {...rePassword}
              />
              <Typography
                sx={{
                  color: "red",
                  fontFamily: "'Kodchasan', sans-serif",
                  fontSize: "14px",
                }}
              >
                {errors2.rePassword?.message}
              </Typography>
            </Box>
  
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="By signing up, you agree to
              Terms & Condtion"
              sx={{
                marginBottom: "20px",
                span: { fontFamily: "'Kodchasan', sans-serif" },
              }}
              required
            />
  
            <Button
              variant="contained"
              sx={{
                width: "100%",
                bgcolor: "#d23f57",
                marginBottom: "20px",
              }}
              type="submit"
            >
              Create Account
            </Button>
          </form>
  
          <Typography
            sx={{
              marginBottom: "20px",
              textAlign: "center",
              fontFamily: "'Kodchasan', sans-serif",
            }}
          >
            or
          </Typography>
  
          <Button
            variant="contained"
            sx={{
              width: "100%",
              bgcolor: "#009EFF",
              marginBottom: "20px",
            }}
            onClick={() => {
              signInWithPopup(auth, provider).catch((err) => console.error(err));
            }}
          >
            Continue With Google
          </Button>
  
          <Box>
            <Typography
              sx={{
                fontFamily: "'Kodchasan', sans-serif",
                textAlign: "center",
              }}
            >
              Already have an account? <Link href="/login">Login</Link>
            </Typography>
          </Box>
        </Box>
        <ToastContainer />
      </>
    );
  };
  
  export default Signup;