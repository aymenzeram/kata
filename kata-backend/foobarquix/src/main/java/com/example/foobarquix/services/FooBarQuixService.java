
package com.example.foobarquix.service;

        import org.springframework.stereotype.Service;

@Service
public class FooBarQuixService {

    public String transform(int number) {
        StringBuilder result = new StringBuilder();

        // Règles de divisibilité
        if (number % 3 == 0) result.append("FOO");
        if (number % 5 == 0) result.append("BAR");

        // Règles de contenu
        String numStr = String.valueOf(number);
        for (char digit : numStr.toCharArray()) {
            if (digit == '3') result.append("FOO");
            if (digit == '5') result.append("BAR");
            if (digit == '7') result.append("QUIX");
        }

        // Si aucune règle n'est appliquée, retourne le nombre initial
        return result.isEmpty() ? numStr : result.toString();
    }
}
