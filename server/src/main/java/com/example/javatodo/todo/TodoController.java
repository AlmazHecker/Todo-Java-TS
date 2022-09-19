package com.example.javatodo.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/todos")
@CrossOrigin(origins = "*")
public class TodoController {
    private final TodoService todoService;

    @Autowired
    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    public List<Todo> getTodos() {
        return todoService.getTodos();
    }

    @GetMapping("/{todoId}")
    public Todo getTodo(@PathVariable Long todoId) {
        return todoService.getTodo(todoId);
    }

    @PostMapping
    public Todo createTodo(@RequestBody Todo todo) {
        return todoService.createTodo(todo);
    }

    @PutMapping("/{todoId}")
    public Todo updateTodo(@RequestBody Todo todo,@PathVariable Long todoId) {
        return todoService.updateTodo(todo, todoId);
    }

    @DeleteMapping("/{todoId}")
    public Todo deleteTodo(@PathVariable Long todoId) {
        return todoService.deleteTodo(todoId);
    }

    @PutMapping("/update/{todoId}")
    public Todo changeTodoStatus(@PathVariable Long todoId) {
        return todoService.changeTodoStatus(todoId);
    }


}
