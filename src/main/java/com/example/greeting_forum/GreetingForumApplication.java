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

			Post p1 = new Post("Freyja", "Halló hoppa stökk", "2023-03-14", "bild");
			Post p2 = new Post("Ida", "Hej hej", "2022-05-14",  "bild");
			Post p3 = new Post("Hilla", "Hei hyppylaukka", "2024-01-14", "bild");

			postRepo.save(p1);
			postRepo.save(p2);
			postRepo.save(p3);
		};


	}

}
