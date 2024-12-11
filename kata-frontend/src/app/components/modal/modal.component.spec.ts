import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { ModalComponent } from './modal.component';
import { FooBarQuixService } from '../../services/foobarquix.service';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let fooBarQuixServiceMock: any;

  beforeEach(async () => {
    fooBarQuixServiceMock = {
      convertNumber: jasmine.createSpy('convertNumber')
    };

    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
      imports: [FormsModule], // Pour gérer les formulaires Angular
      providers: [
        FooBarQuixService, // Fournir le service si nécessaire
        { provide: FooBarQuixService, useValue: fooBarQuixServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devrait être créé', () => {
    expect(component).toBeTruthy();
  });

  it('devrait réinitialiser result lors de l’appel à onNumberInputChange', () => {
    component.result = 'Résultat précédent';
    component.onNumberInputChange();
    expect(component.result).toBe('');
  });

  it('devrait appeler convertNumber du service et mettre à jour result avec succès', () => {
    const mockResponse = 'FOOBAR';
    fooBarQuixServiceMock.convertNumber.and.returnValue(of(mockResponse));

    component.number = 15;
    const mockForm = { valid: true };

    component.onSubmit(mockForm);
    expect(fooBarQuixServiceMock.convertNumber).toHaveBeenCalledWith(15);
    expect(component.result).toBe(mockResponse);
  });

  it('devrait afficher une erreur si le service échoue', () => {
    fooBarQuixServiceMock.convertNumber.and.returnValue(
      throwError(() => new Error('Erreur API'))
    );

    component.number = 15;
    const mockForm = { valid: true }; 

    component.onSubmit(mockForm);
    expect(fooBarQuixServiceMock.convertNumber).toHaveBeenCalledWith(15);
    expect(component.result).toBe('Erreur lors de la conversion du nombre');
  });

  it('ne devrait pas appeler le service si le formulaire est invalide', () => {
    const mockForm = { valid: false }; 

    component.onSubmit(mockForm);
    expect(fooBarQuixServiceMock.convertNumber).not.toHaveBeenCalled();
  });
});
