import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h2>Add a new keg</h2>
      <div>
        <label>Kombucha Name</label>
        <input #newName>
      </div>
      <div>
        <label>Kombucha Brand</label>
        <input #newBrand>
      </div>
      <div>
        <label>Kombucha Price</label>
        <input #newPrice>
      </div>
      <div>
        <label>Kombucha Flavor</label>
        <input #newFlavor>
      </div>
      <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newFlavor.value);">Add keg</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, flavor: string) {
    var newKegToAdd: Keg = new Keg(name, brand, price, flavor);
    this.newKegSender.emit(newKegToAdd);
  }
}
