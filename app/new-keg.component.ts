import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
      <label>Enter Keg Name:</label>
      <input #newName>
      <br>
    </div>
    <div>
      <label>Enter Keg Brand:</label>
      <input #newBrand>
      <br>
    </div>
    <div>
      <label>Enter Keg Price:</label>
      <input #newPrice>
      <br>
    </div>
    <div>
      <label>Enter Keg Alcohol Content:</label>
      <input #newAlcoholContent>
      <br>
    </div>
    <div>
      <label>Enter Keg Pints:</label>
      <input #newKegPints>
      <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value, newKegPints.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlcoholContent.value=''; newKegPints.value='';">Add</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: string, pintsLeft: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent, pintsLeft);
    this.newKegSender.emit(newKegToAdd);
  }
}
