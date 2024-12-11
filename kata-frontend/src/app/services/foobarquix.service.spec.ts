import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { FooBarQuixService } from './foobarquix.service';
import { provideHttpClient } from '@angular/common/http';

describe('FooBarQuixService', () => {
  let service: FooBarQuixService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://localhost:8080/foobarquix';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [FooBarQuixService, provideHttpClient(),
        provideHttpClientTesting()
      ],
    });
    service = TestBed.inject(FooBarQuixService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert a number correctly', () => {
    const testNumber = 15;
    const expectedResponse = 'FOOBARBAR';

    service.convertNumber(testNumber).subscribe((response) => {
      expect(response).toBe(expectedResponse);
    });

    const req = httpMock.expectOne(`${apiUrl}/${testNumber}`);
    expect(req.request.method).toBe('GET');
    req.flush(expectedResponse); 
  });

  it('should handle errors correctly', () => {
    const testNumber = 99;
    service.convertNumber(testNumber).subscribe(
      () => { },
      (error) => {
        expect(error.message).toContain('Erreur lors de la conversion du nombre'); 
      }
    );

    const req = httpMock.expectOne(`${apiUrl}/${testNumber}`);
    req.flush('Erreur lors de la conversion du nombre', { status: 500, statusText: 'Internal Server Error' }); 
  });

  afterEach(() => {
    httpMock.verify();
  });
});