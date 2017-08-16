import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div>
      <div *ngIf="childSelectedKeg">
        <h3>{{childSelectedKeg.name}}</h3>
        <p>Pints left: {{childSelectedKeg.pintsLeft}}</p>
        <h3>Edit Keg</h3>
        <label>Enter Keg Name:</label>
        <input [(ngModel)]="childSelectedKeg.name">
        <br>
        <label>Enter Keg Brand:</label>
        <input [(ngModel)]="childSelectedKeg.brand">
        <br>
        <label>Enter Keg Price:</label>
        <input [(ngModel)]="childSelectedKeg.price">
        <br>
        <label>Enter Keg Alcohol Content:</label>
        <input [(ngModel)]="childSelectedKeg.alcoholContent">
        <br>
        <label>Enter Keg Pints:</label>
        <input [(ngModel)]="childSelectedKeg.pintsLeft">
        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}
