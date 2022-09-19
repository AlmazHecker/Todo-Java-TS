package com.example.javatodo.todo;

import jakarta.persistence.*;

import java.time.LocalDate;
@Entity
@Table
public class Todo {
    @Id
    @SequenceGenerator(
            name = "todo_sequence",
            sequenceName = "todo_sequence",
            allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "todo_sequence ")
    private Long id;
    private LocalDate createdAt;
    private LocalDate updatedAt;

    private boolean isDone;
    private String content;

    public Todo() {
    }

    public Todo(Long id) {
    }

    public Todo(Long id, String content) {
        this.id = id;
        this.content = content;
        this.createdAt = LocalDate.now();
        this.updatedAt = LocalDate.now();
        this.isDone = false;
        ;
    }

    public Todo(String content) {
        this.content = content;
        this.createdAt = LocalDate.now();
        this.updatedAt = LocalDate.now();
        this.isDone = false;
    }

    public Boolean getIsDone() {return this.isDone;}
    public void setIsDone(boolean isDone){ this.isDone = isDone;}
    public String getContent() { return this.content; }
    public void setContent(String content) { this.content = content; }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public LocalDate getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }
    public LocalDate getUpdatedAt() {
        return updatedAt;
    }
    public void setUpdatedAt(LocalDate updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Override
    public String toString() {
        return "Todo{" +
                "id=" + id +
                "isDone=" + isDone +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                ", content='" + content +
                '}';
    }
}
