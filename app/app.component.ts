import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room for {{month}}/{{day}}/{{year}}</h1>
    <ul>
      <li [class]="priceIndicatorColor(currentKeg)" (click)="lowSupply(currentKeg)" *ngFor="let currentKeg of kegs"><strong>{{currentKeg.name}}</strong> <br> Brand: {{currentKeg.brand}} <br> Price: {{currentKeg.price}} <br> Alcohol Content: {{currentKeg.alcoholContent}}<br> <button (click)="editKeg(currentKeg)">Edit</button><br><br></li>
    </ul>
    <hr>
    <div>
      <div *ngIf="selectedKeg">
        <h3>{{selectedKeg.name}}</h3>
        <p>Pints left: {{selectedKeg.pintsLeft}}</p>
        <h3>Edit Keg</h3>
        <label>Enter Keg Name:</label>
        <input [(ngModel)]="selectedKeg.name">
        <br>
        <label>Enter Keg Brand:</label>
        <input [(ngModel)]="selectedKeg.brand">
        <br>
        <label>Enter Keg Price:</label>
        <input [(ngModel)]="selectedKeg.price">
        <br>
        <label>Enter Keg Alcohol Content:</label>
        <input [(ngModel)]="selectedKeg.alcoholContent">
        <br>
        <label>Enter Keg Pints:</label>
        <input [(ngModel)]="selectedKeg.pintsLeft">
        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  kegs: Keg[] = [
    new Keg("MT. TAKHOMA BLONDE", "German Pilsner Malt", 5.00, "4.4%", 124),
    new Keg("PINNACLE PEAK PALE ALE", "German malted barley", 7.00, "5.4%", 124),
    new Keg("PUGET SOUND PORTER", "Columbus and Centennial", 10.00, "8.9%", 124)
  ];
selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

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

  finishedEditing() {
    this.selectedKeg = null;
  }

}


export class Keg {
  public lessThan10Pints: boolean = false;

  constructor(public name: string, public brand: string, public price: number, public alcoholContent: string, public pintsLeft: number) {

  }
}
