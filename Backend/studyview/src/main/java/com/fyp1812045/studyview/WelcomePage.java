package com.fyp1812045.studyview;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomePage {

	@RequestMapping("/index")
	public String index() {
		return "index";
	}

}
