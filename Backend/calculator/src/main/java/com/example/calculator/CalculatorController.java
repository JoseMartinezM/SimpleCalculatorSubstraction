package com.example.calculator;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:8000")  
public class CalculatorController {
    @GetMapping("/add")
    public Calculator add(@RequestParam(value = "num1", defaultValue = "0") int num1,
                          @RequestParam(value = "num2", defaultValue = "0") int num2) {
        return new Calculator(String.valueOf(num1 + num2));
    }
    
    @GetMapping("/sub")
    public Calculator sub(@RequestParam(value = "num1", defaultValue = "0") int num1,
                          @RequestParam(value = "num2", defaultValue = "0") int num2) {
        return new Calculator(String.valueOf(num1 - num2));
    }
}