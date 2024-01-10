package com.example.greeting_forum.Service;

import com.example.greeting_forum.Repository.PostRepo;
import com.example.greeting_forum.model.Post;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    private final PostRepo postRepo;

    public PostService(PostRepo postRepo) {
        this.postRepo = postRepo;
    }

    public List<Post> getAllPosts() {
        return postRepo.findAll();
    }

    public void deletePost(Long postId) {
        if (postRepo.findPostById(postId) != null) {
            postRepo.deleteById(postId);
        }
    }

    public void addNewPost(Post post) {
        postRepo.save(post);
    }

    public boolean updatePost(Long postId, Post updatedPost) {
        Post existingPost = postRepo.findPostById(postId);
        if (existingPost != null) {
            existingPost.setGreeting(updatedPost.getGreeting());

            postRepo.save(existingPost);
            return true;
        } else {
            return false;
        }
    }

}
