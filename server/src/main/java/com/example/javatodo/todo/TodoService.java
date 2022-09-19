package com.example.javatodo.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TodoService {
    private final TodoRepository todoRepository;

    @Autowired
    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> getTodos() {
        return todoRepository.findAll();
    }

    public Todo getTodo(Long todoId) {
        System.out.println(todoId);
        return todoRepository.findTodoById(todoId);
    }

    public Todo createTodo(Todo todoData) {
        Todo todo = new Todo(todoData.getContent());
        todoRepository.save(todo);
        return todo;
    }

    public Todo changeTodoStatus(Long todoId) {
        Todo todo = todoRepository.findTodoById(todoId);
        todo.setIsDone(!todo.getIsDone());
        todo.setUpdatedAt(LocalDate.now());
        todoRepository.save(todo);
        return todo;
    }

    public Todo updateTodo(Todo todoData, Long todoId) {
        Todo todo = todoRepository.findTodoById(todoId);
        todo.setContent(todoData.getContent());
        todo.setUpdatedAt(LocalDate.now());
        todoRepository.save(todo);
        return todo;
    }

    public Todo deleteTodo(Long todoId) {
        Todo todo = todoRepository.findTodoById(todoId);
        todoRepository.delete(todo);
        return todo;
    }

}
