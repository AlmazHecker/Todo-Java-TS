import React from "react";
import styled from "@emotion/styled";
import DeleteModal from "./UI/DeleteModal";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { deleteTodo } from "../store/todoSlice";
import { StrOrNum } from "../utils/general";

interface DeleteTodoProps {
  todoId: StrOrNum;
  onClose: () => void;
  open: boolean;
}

const DeleteTodo = ({ todoId, onClose, open }: DeleteTodoProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const onDelete = () => {
    dispatch(deleteTodo({ todoId, onClose }));
  };

  return (
    <Container>
      <DeleteModal
        open={open}
        title="Are you sure ?"
        onConfirm={onDelete}
        onCancel={onClose}
      />
    </Container>
  );
};

export default DeleteTodo;

const Container = styled("div")``;
