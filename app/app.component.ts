import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room for {{month}}/{{day}}/{{year}}</h1>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
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
  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg("MT. TAKHOMA BLONDE", "German Pilsner Malt", 5.00, "4.4%", 124),
    new Keg("PINNACLE PEAK PALE ALE", "German malted barley", 7.00, "5.4%", 124),
    new Keg("PUGET SOUND PORTER", "Columbus and Centennial", 10.00, "8.9%", 124)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}
