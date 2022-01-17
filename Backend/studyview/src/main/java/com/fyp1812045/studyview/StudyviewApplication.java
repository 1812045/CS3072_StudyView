package com.fyp1812045.studyview;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.fyp1812045.studyview.repo")
@SpringBootApplication
public class StudyviewApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudyviewApplication.class, args);
	}

}
