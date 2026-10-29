package com.test.fashionNew.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

	@GetMapping("/")
	public String home() {
		return "index.html";
	}
	
	@GetMapping("/comingsoon")
	public String comingsoon() {
		return "coming.html";
	}
	
	@GetMapping("/gallery")
	public String gallery() {
		return "gallery.html";
	}
	
	@GetMapping("/contactUs")
	public String contactUs() {
		return "contactus.html";
	}
}
