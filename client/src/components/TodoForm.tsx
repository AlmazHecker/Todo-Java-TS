import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { TodoItem } from "../utils/todo-types";

interface TodoFormProps {
  title?: string;
  onSubmit(todo: string): void;
  initialValue?: TodoItem;
}

const TodoForm = ({ title, onSubmit, initialValue }: TodoFormProps) => {
  const [todo, setTodo] = useState("");

  const handleInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    return setTodo(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(todo);
  };

  useEffect(() => {
    if (initialValue) {
      setTodo(initialValue.content);
    }
  }, [initialValue]);

  return (
    <Container>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleInputChange}
          value={todo}
          placeholder="Type smth..."
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default TodoForm;

const Container = styled("div")`
  background-color: rgb(30, 30, 30);
  padding: 20px;
  border-radius: 5px;
`;

const Form = styled("form")`
  display: grid;
  grid-template-columns: 77% 20%;
  justify-content: space-between;
  gap: 10px;
`;

const Title = styled("h2")`
  color: white;
  margin: 0;
  margin-bottom: 10px;
`;
