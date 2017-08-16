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
  firstKeg = {
    name: "Mt. Takhoma Blonde",
    brand: "German Pilsner Malt",
    price: "5.00",
    alcoholContent: "4.4%",
    pintsLeft: "124"
  }

}
