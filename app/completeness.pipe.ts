import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "completeness",
  pure: false
})


export class CompletenessPipe implements PipeTransform {
  transform(input: Keg[], desiredCompleteness) {
    var output: Keg[] = [];
    if(desiredCompleteness === "strongBeer") {
      for (var i = 0; i <input.length; i++) {
        if (input[i].alcoholContent >= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "weakerBeer") {
        for (var i = 0; i <input.length; i++) {
          if (input[i].alcoholContent < 10) {
            output.push(input[i]);
          }
        }
        return output;
    } else if (desiredCompleteness === "lowSupply") {
      for (var i = 0; i < input.length; i++) {
        if( input[i].pintsLeft < 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
        return input;
    }
  }
}
