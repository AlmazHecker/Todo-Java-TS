import React, { FC, useEffect } from "react";
import styled from "@emotion/styled";
import TodoItem from "./TodoItem";
import { useSearchParams } from "../utils/hooks/useSearchParams";
import TodoModals from "./TodoModals";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { clearTodos, getTodos, updateTodoStatus } from "../store/todoSlice";
import { useDispatch } from "react-redux";

const Todos: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [, setParams] = useSearchParams();
  const { todos } = useSelector((state: RootState) => state.todos);

  const openEditModal = (todoId: number) => {
    setParams({ todoId, modal: "EDIT" });
  };

  const openDeleteModal = (todoId: number) => {
    setParams({ todoId, modal: "DELETE" });
  };

  const changeTodoStatus = (todoId: number) => {
    dispatch(updateTodoStatus(todoId));
  };

  useEffect(() => {
    dispatch(getTodos());
    return () => {
      dispatch(clearTodos());
    };
  }, [dispatch]);

  return (
    <Container>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          onDelete={openDeleteModal}
          onEdit={openEditModal}
          changeStatus={changeTodoStatus}
          {...todo}
        />
      ))}
      <TodoModals />
    </Container>
  );
};

export default Todos;

const Container = styled("div")`
  margin-top: 40px;
`;
