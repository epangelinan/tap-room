import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <li [class]="priceIndicatorColor(currentKeg)" (click)="lowSupply(currentKeg)" *ngFor="let currentKeg of childKegList"><strong>{{currentKeg.name}}</strong><button (click)="sellButtonHasBeenClicked(currentKeg)">Sell</button><br> Brand: {{currentKeg.brand}} <br> Price: {{currentKeg.price}} <br> Alcohol Content: {{currentKeg.alcoholContent}}<br> <button (click)="editButtonHasBeenClicked(currentKeg)">Edit</button><br><br></li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() clickSellButton = new EventEmitter();

  lowSupply(clickedKeg: Keg) {
    if(clickedKeg.pintsLeft <= 10) {
      alert("There are less than 10 pints left");
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

  sellButtonHasBeenClicked(pintToUpdate: Keg) {
    this.clickSellButton.emit(pintToUpdate);
  }

}
