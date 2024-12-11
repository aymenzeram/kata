package com.aymenz.foobarquix.service;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

@Service
@ComponentScan(basePackages = "com.aymenz.foobarquix")
public class FooBarQuixService {
	  public String transformNumber(int number) {
	        StringBuilder result = new StringBuilder();

	        if (number % 3 == 0) result.append("FOO");
	        if (number % 5 == 0) result.append("BAR");
	        
	        String numberStr = String.valueOf(number);
	        for (char c : numberStr.toCharArray()) {
	            if (c == '3') result.append("FOO");
	            if (c == '5') result.append("BAR");
	            if (c == '7') result.append("QUIX");
	        }

	        return result.length() > 0 ? result.toString() : numberStr;
	    }
}
