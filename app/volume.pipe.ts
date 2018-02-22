import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "volume",
  pure: false
})

export class VolumePipe implements PipeTransform {

  transform(input: Keg[], specifiedVolume) {
    var output: Keg[] = [];
    if(specifiedVolume === "fullKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].kegAmount > 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(specifiedVolume === "emptyKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].kegAmount <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
