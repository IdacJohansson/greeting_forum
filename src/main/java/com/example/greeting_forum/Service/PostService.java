package Service;

import com.example.greeting_forum.Repository.PostRepo;
import com.example.greeting_forum.model.Post;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    private final PostRepo postRepo;

    private Post newPost;

    public PostService(PostRepo postRepo) {
        this.postRepo = postRepo;
    }

    public List<Post> getAllPosts(){
        return postRepo.findAll();
    }

    public void deletePost(Long postId){
        if(postRepo.findPostById(postId) != null){
            postRepo.deleteById(postId);
        }

    }
}
