import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createTodoRequest,
  getTodoByIdRequest,
  getTodosRequest,
  updateTodoRequest,
  updateTodoStatusRequest,
  deleteTodoRequest,
  updateTodoParams,
  deleteTodoParams,
} from "../api/todoService";
import { StrOrNum } from "../utils/general";
import { TodoItem } from "../utils/todo-types";

export const getTodos = createAsyncThunk<TodoItem[]>(
  "todoSlice/get-todos",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getTodosRequest();
      return data;
    } catch (e: any) {
      return rejectWithValue(e);
    }
  }
);
export const getTodoById = createAsyncThunk<TodoItem, StrOrNum>(
  "todoSlice/get-todo-by-id",
  async (todoId, { rejectWithValue }) => {
    try {
      const { data } = await getTodoByIdRequest(todoId);
      return data;
    } catch (e: any) {
      return rejectWithValue(e);
    }
  }
);

export const updateTodo = createAsyncThunk<TodoItem, updateTodoParams>(
  "todoSlice/update-todo",
  async ({ todoId, todo, onClose }, { rejectWithValue }) => {
    try {
      const { data } = await updateTodoRequest(todoId, todo);
      onClose();
      return data;
    } catch (e: any) {
      return rejectWithValue(e);
    }
  }
);

export const deleteTodo = createAsyncThunk<number, deleteTodoParams>(
  "todoSlice/delete-todo",
  async ({ todoId, onClose }, { rejectWithValue }) => {
    try {
      await deleteTodoRequest(todoId);
      onClose();
      return +todoId;
    } catch (e: any) {
      return rejectWithValue(e);
    }
  }
);

export const createTodo = createAsyncThunk<TodoItem, string>(
  "todoSlice/create-todo",
  async (todo, { rejectWithValue }) => {
    try {
      const { data } = await createTodoRequest(todo);
      return data;
    } catch (e: any) {
      return rejectWithValue(e);
    }
  }
);

export const updateTodoStatus = createAsyncThunk<number, number>(
  "todoSlice/update-todo-status",
  async (todoId, { rejectWithValue }) => {
    try {
      await updateTodoStatusRequest(todoId);
      return todoId;
    } catch (e: any) {
      return rejectWithValue(e);
    }
  }
);

interface TodoState {
  todos: TodoItem[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    clearTodos(state) {
      state.todos = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getTodos.fulfilled,
        (state: TodoState, { payload }: PayloadAction<TodoItem[]>) => {
          state.todos = payload;
        }
      )
      .addCase(
        deleteTodo.fulfilled,
        (state: TodoState, { payload: todoId }: PayloadAction<number>) => {
          state.todos = state.todos.filter((todo) => todo.id !== todoId);
        }
      )
      .addCase(
        updateTodoStatus.fulfilled,
        (state: TodoState, { payload: todoId }: PayloadAction<number>) => {
          state.todos = state.todos.map((todo) => {
            if (todo.id === todoId) todo.isDone = !todo.isDone;
            return todo;
          });
        }
      )
      .addCase(
        updateTodo.fulfilled,
        (state: TodoState, { payload }: PayloadAction<TodoItem>) => {
          state.todos = state.todos.map((todo) => {
            if (todo.id === payload.id) return payload;
            return todo;
          });
        }
      )
      .addCase(
        createTodo.fulfilled,
        (state: TodoState, { payload }: PayloadAction<TodoItem>) => {
          state.todos.push(payload);
        }
      );
  },
});

export const { clearTodos } = todoSlice.actions;

export default todoSlice.reducer;
