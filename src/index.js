import './styles/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from "./components/Navigation/Navbar";
import {StyledEngineProvider} from "@mui/material/styles";

ReactDOM.render(
  <React.StrictMode>
      <StyledEngineProvider injectFirst>
          <Navbar/>
          <App />
      </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

