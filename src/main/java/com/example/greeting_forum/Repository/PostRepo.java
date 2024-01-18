package com.example.greeting_forum.Repository;

import com.example.greeting_forum.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepo extends JpaRepository<Post, Long> {

    Post findByAlias(String alias);
    
    Post findPostById(Long id);
}
