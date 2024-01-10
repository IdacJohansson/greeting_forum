package com.example.greeting_forum;

import com.example.greeting_forum.Repository.PostRepo;
import com.example.greeting_forum.model.Post;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class GreetingForumApplication {

	public static void main(String[] args) {
		SpringApplication.run(GreetingForumApplication.class, args);
	}

	@Bean
	public CommandLineRunner pojo(PostRepo postRepo){
		return args -> {

			Post p1 = new Post("Ida", "Hej hej", "2023-01-10", "bild");

		};
	}

}
