package com.example.greeting_forum.Repository;

import com.example.greeting_forum.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepo extends JpaRepository<Post, Long> {

    Post findByUser(String user);
    
    Post findPostById(Long id);

    
}
