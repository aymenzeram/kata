package com.aymenz.foobarquix.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class FooBarQuixServiceTest {
	private final FooBarQuixService kataService = new FooBarQuixService();

    @Test
    void testTransformNumber() {
        assertEquals("1", kataService.transformNumber(1));
        assertEquals("FOOFOO", kataService.transformNumber(3));
        assertEquals("BARBAR", kataService.transformNumber(5));
        assertEquals("QUIX", kataService.transformNumber(7));
        assertEquals("FOO", kataService.transformNumber(9));
        assertEquals("FOOBAR", kataService.transformNumber(51));
        assertEquals("BARFOO", kataService.transformNumber(53));
        assertEquals("FOOFOOFOO", kataService.transformNumber(33));
        assertEquals("FOOBARBAR", kataService.transformNumber(15));
    }

}
