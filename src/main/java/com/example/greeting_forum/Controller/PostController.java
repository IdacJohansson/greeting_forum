package com.example.greeting_forum.Controller;

import Service.PostService;
import com.example.greeting_forum.model.Post;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class PostController {

    private final Logger log = LoggerFactory.getLogger(PostController.class);

    private final PostService postService;


    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/all")
    public List<Post> getAllPosts(){
        return postService.getAllPosts();
    }


}
