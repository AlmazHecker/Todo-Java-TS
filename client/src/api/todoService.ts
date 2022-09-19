import { AxiosResponse } from "axios";
import { StrOrNum } from "../utils/general";
import { TodoItem } from "../utils/todo-types";
import axiosInstance from "./axiosIntance";

interface todoService {
  getTodos: Promise<AxiosResponse<TodoItem[]>>;
  deleteTodo: Promise<AxiosResponse<TodoItem>>;
  updateTodo: Promise<AxiosResponse<TodoItem>>;
  createTodo: Promise<AxiosResponse<TodoItem>>;
  getTodoById: Promise<AxiosResponse<TodoItem>>;
}

export interface updateTodoParams {
  todoId: StrOrNum;
  todo: string;
  onClose: () => void;
}

export interface deleteTodoParams {
  todoId: StrOrNum;
  onClose: () => void;
}

export const getTodosRequest = (): todoService["getTodos"] => {
  return axiosInstance.get("/todos");
};

export const getTodoByIdRequest = (
  todoId: StrOrNum
): todoService["getTodoById"] => {
  return axiosInstance.get(`/todos/${todoId}`);
};

export const deleteTodoRequest = (
  todoId: StrOrNum
): todoService["deleteTodo"] => {
  return axiosInstance.delete(`/todos/${todoId}`);
};

export const updateTodoRequest = (
  todoId: StrOrNum,
  todo: string
): todoService["updateTodo"] => {
  return axiosInstance.put(`/todos/${todoId}`, { content: todo });
};

export const createTodoRequest = (todo: string): todoService["createTodo"] => {
  return axiosInstance.post(`/todos`, { content: todo });
};

export const updateTodoStatusRequest = (todoId: number) => {
  return axiosInstance.put(`/todos/update/${todoId}`);
};
