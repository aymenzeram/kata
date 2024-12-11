import { Component } from '@angular/core';
import { FooBarQuixService } from '../../services/foobarquix.service';

@Component({
  selector: 'app-modal',
  standalone: false,
  
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  number: number | null = null;
  result: string = '';

  constructor(private fooBarQuixService: FooBarQuixService) {}
  onNumberInputChange() {
    this.result = '';  
  }
  onSubmit(form: any): void {
    if (form.valid) {
      this.fooBarQuixService.convertNumber(this.number!).subscribe({
        next: (response) => {
          this.result = response;
        },
        error: (err) => {
          console.error('Erreur lors de l\'appel à l\'API', err);
          this.result = 'Erreur lors de la conversion du nombre';
        }
      });
    }
  }
}
