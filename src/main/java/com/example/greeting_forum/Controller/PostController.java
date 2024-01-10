package com.example.greeting_forum.Controller;

import com.example.greeting_forum.Service.PostService;
import com.example.greeting_forum.model.Post;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    private final Logger log = LoggerFactory.getLogger(PostController.class);

    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/all")
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }

    @DeleteMapping("/{postId}")
    public void deletePost(@PathVariable("postId") Long postId) {
        postService.deletePost(postId);
    }

    @PostMapping("/add")
    public String addNewPost(@RequestBody Post p) {
        postService.addNewPost(p);
        log.info("Post added with Alias: " + p.getUser() + "and Greeting: " + p.getGreeting());
        return "Post added!";
    }

    @PutMapping("/update/{postId}")
    public String updatePost(@PathVariable("postId") Long postId, @RequestBody Post updatedPost) {
        if (postService.updatePost(postId, updatedPost)) {
            return "Post updated";
        } else {
            return "Update failed!";
        }
    }
}







