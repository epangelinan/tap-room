import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allBeers">All Beers</option>
    <option value="strongBeer">Strong Beer (10% and up)</option>
    <option value="weakerBeer">Weaker Beer (Less than 10%)</option>
    <option value="lowSupply">Low Supply</option>
  </select>

  <ul>
    <li [class]="priceIndicatorColor(currentKeg)" (click)="lowSupply(currentKeg)" *ngFor="let currentKeg of childKegList | completeness:filterByCompleteness"><strong>{{currentKeg.name}}</strong>    <button (click)="sellButtonHasBeenClicked(currentKeg)">Sell</button><br> Brand: {{currentKeg.brand}} <br> Price: {{currentKeg.price}} <br> Alcohol Content: {{currentKeg.alcoholContent}}%<br> <button (click)="editButtonHasBeenClicked(currentKeg)">Edit</button><br><br></li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() clickSellButton = new EventEmitter();
  filterByCompleteness: string = "";


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

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

}
