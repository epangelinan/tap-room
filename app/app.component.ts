import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room for {{month}}/{{day}}/{{year}}</h1>
    <ul>
      <li><strong>{{firstKeg.name}}</strong> <br> Brand: {{firstKeg.brand}} <br> Price: {{firstKeg.price}} <br> Alcohol Content: {{firstKeg.alcoholContent}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  firstKeg: Keg = new Keg("Mt. Takhoma Blonde", "German Pilsner Malt", 5.00, "4.4%", 124);
  }



export class Keg {
  public lessThan10Pints: boolean = false;

  constructor(public name: string, public brand: string, public price: number, public alcoholContent: string, public pintsLeft: number) {

  }
}
