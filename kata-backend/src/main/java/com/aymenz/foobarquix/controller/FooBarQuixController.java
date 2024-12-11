package com.aymenz.foobarquix.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aymenz.foobarquix.service.FooBarQuixService;

@RestController
@RequestMapping
public class FooBarQuixController {

    @Autowired
    private FooBarQuixService fooBarQuixService;
    @CrossOrigin(origins = "http://localhost:4200") 
    @GetMapping("/foobarquix/{number}")
    public String convert(@PathVariable int number) {
    	System.out.println(fooBarQuixService.transformNumber(number));
        return fooBarQuixService.transformNumber(number);
    }
}
