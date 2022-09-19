import React from "react";
import styled from "@emotion/styled";
import TodoForm from "./TodoForm";
import { useDispatch } from "react-redux";
import { createTodo } from "../store/todoSlice";
import { AppDispatch } from "../store";

const CreateTodo = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (todo: string) => {
    dispatch(createTodo(todo));
  };
  return (
    <Container>
      <TodoForm onSubmit={handleSubmit} title="Create todo" />
    </Container>
  );
};

export default CreateTodo;

const Container = styled("div")`
  width: 100%;
  margin-top: 50px;
  position: sticky;
  top: 0;
`;
