import * as React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  <BrowserRouter >
    <Sidebar />
       
  </BrowserRouter>,
  document.querySelector("#root")
);