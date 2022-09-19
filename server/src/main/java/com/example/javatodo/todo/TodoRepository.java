package com.example.javatodo.todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {

    @Query("SELECT p FROM Todo p WHERE p.content = ?1")
    Optional<Todo> findPostByTitle(String title);

    @Query("SELECT p FROM Todo p WHERE p.id = ?1")
    Todo findTodoById(Long id);


}
