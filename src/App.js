import "./App.css";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
  Box,
} from "@mui/material";
/**@jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const MyButton = styled.button`
    background-color: blue;
    color: white;
    border-radius: 5px;
    &:hover {
      background-color: #00bfff;
      color: black;
    }
  `;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {theme === lightTheme ? (
          <Typography variant="h5" gutterBottom>
            Light Mode
          </Typography>
        ) : (
          <Typography variant="h5" gutterBottom>
            Dark Mode
          </Typography>
        )}

        <MyButton
          onClick={() =>
            setTheme(theme === lightTheme ? darkTheme : lightTheme)
          }
        >
          Change Theme
        </MyButton>
      </Box>
    </ThemeProvider>
  );
}

export default App;
