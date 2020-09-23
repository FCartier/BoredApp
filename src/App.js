import React from "react";
import styled from "styled-components";

import Dashboard from "./features/dashboard/Dashboard";

import "./App.css";

const App = () => (
  <Container>
    <Dashboard />
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    "header header header"
    "refresh searchbar generator"
    "table table table";

  background: #ffe8e1;
  justify-items: center;
  align-items: center;
`;

export default App;
