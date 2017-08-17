import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room for {{month}}/{{day}}/{{year}}</h1>
    <keg-list [childKegList]="masterKegList" (clickSellButton)="editPintsLeft($event)" (clickSender)="editKeg($event)"></keg-list>
    <hr>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
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
    new Keg("MT. TAKHOMA BLONDE", "German Pilsner Malt", 5.00, 4.4, 124),
    new Keg("PINNACLE PEAK PALE ALE", "German malted barley", 7.00, 5.4, 124),
    new Keg("PUGET SOUND PORTER", "Columbus and Centennial", 10.00, 8.9, 124)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  editPintsLeft(updatePint) {
    updatePint.pintsLeft = updatePint.pintsLeft - 1;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}
