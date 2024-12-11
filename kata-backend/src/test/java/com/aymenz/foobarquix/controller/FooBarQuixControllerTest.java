package com.aymenz.foobarquix.controller;
import com.aymenz.foobarquix.service.FooBarQuixService;

import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;


@WebMvcTest(FooBarQuixController.class)

public class FooBarQuixControllerTest {
	 @Autowired
	    private MockMvc mockMvc;

	    @MockBean
	    private FooBarQuixService fooBarQuixService;

	    @BeforeEach
	    void setup() {
	        when(fooBarQuixService.transformNumber(3)).thenReturn("FOOFOO");
	    }

	    @Test
	    void testConvert() throws Exception {
	        int number = 15;
	        String expectedResponse = "FooBar"; // assuming the service returns this for 15

	        when(fooBarQuixService.transformNumber(number)).thenReturn(expectedResponse);

	        mockMvc.perform(get("/foobarquix/{number}", number))
	                .andExpect(status().isOk()) // 200 OK
	                .andExpect(content().string(expectedResponse)); // Response content should match expected response
	    }
}
