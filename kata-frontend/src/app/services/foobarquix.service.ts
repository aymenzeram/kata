import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FooBarQuixService {
  private apiUrl = 'http://localhost:8080/foobarquix'; 

  constructor(private http: HttpClient) {}

  convertNumber(number: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/${number}`, { responseType: 'text' as 'json' }).pipe(
      catchError((error) => {
        console.error('Erreur lors de l\'appel à l\'API:', error);
        return throwError(() => new Error(`Erreur lors de la conversion du nombre : ${error.message || error}`));
           })
    );
  }
}
