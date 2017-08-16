import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <li [class]="priceIndicatorColor(currentKeg)" (click)="lowSupply(currentKeg)" *ngFor="let currentKeg of childKegList"><strong>{{currentKeg.name}}</strong> <br> Brand: {{currentKeg.brand}} <br> Price: {{currentKeg.price}} <br> Alcohol Content: {{currentKeg.alcoholContent}}<br> <button (click)="editButtonHasBeenClicked(currentKeg)">Edit</button><br><br></li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  lowSupply(clickedKeg: Keg) {
    if(clickedKeg.lessThan10Pints === true) {
      alert("There are less than 10 pints left");
    } else {
      alert("There are more than 10 pints for this keg");
    }
  }

  priceIndicatorColor(currentKeg) {
    if(currentKeg.price <= 5) {
      return "bg-danger";
    } else {
      return "bg-info"
    }
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

}
