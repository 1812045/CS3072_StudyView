package com.fyp1812045.studyview.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fyp1812045.studyview.model.Models;
import com.fyp1812045.studyview.repo.ModelRepo;

@RestController
@RequestMapping(value = "/")
@CrossOrigin("*")
public class ModelsResource {

	@Autowired
	ModelRepo modelRepo;

	@GetMapping(value = "/models")
	public List<Models> getModels() {
		return modelRepo.findAll();

	}

}
