import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The props to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
  palette: {
    primary: {
      main: "#D23369",
      darker: "#ccc",
    },
    secondary: {
      main: "#fff",
      contrastText: "#D23369",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },

    auth: {
      main: "#d23f57",
    },
  },
});
