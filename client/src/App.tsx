import styled from "@emotion/styled";
import React from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <Container>
      <CreateTodo />
      <Todos />
    </Container>
  );
}

const Container = styled("div")`
  width: 60%;
  margin: 0 auto;
`;

export default App;
