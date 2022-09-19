import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import TodoForm from "./TodoForm";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { getTodoById, updateTodo } from "../store/todoSlice";
import { Modal } from "@mui/material";
import { TodoItem } from "../utils/todo-types";
import { StrOrNum } from "../utils/general";

interface UpdateTodoProps {
  onClose: () => void;
  open: boolean;
  todoId: StrOrNum;
}

const UpdateTodo: FC<UpdateTodoProps> = ({ onClose, open, todoId }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [todo, setTodo] = useState<TodoItem>();

  const handleSubmit = (todo: string) => {
    dispatch(updateTodo({ todo, todoId, onClose }));
  };

  useEffect(() => {
    dispatch(getTodoById(todoId)).unwrap().then(setTodo);
    return () => setTodo(undefined);
  }, [dispatch, todoId]);

  return (
    <Modal onClose={onClose} open>
      <Container>
        <TodoForm
          initialValue={todo}
          onSubmit={handleSubmit}
          title="Update todo"
        />
      </Container>
    </Modal>
  );
};

export default UpdateTodo;

const Container = styled("div")`
  width: 500px;
  max-height: 561px;
  background: #ffffff;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  outline: none;
`;
