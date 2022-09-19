package com.example.javatodo.todo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TodoConfig {

    @Bean
    CommandLineRunner commandLineRunner(TodoRepository repository) {
        return args -> {
            Todo todo = new Todo(
                    1L,
                  "Learn WebAssembly"
            );
          repository.save(todo);
        };
    }
}
