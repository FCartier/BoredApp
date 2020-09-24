import React from "react";
import styled from "styled-components";

import Dashboard from "../features/dashboard/Dashboard";

const App = () => (
  <Container>
    <Dashboard />
  </Container>
);

const Container = styled.div`
  margin: 0;
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
