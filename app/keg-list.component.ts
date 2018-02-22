import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allKegs" selected="selected">All Kegs</option>
      <option value="fullKegs">Full Kegs</option>
      <option value="emptyKegs">Empty Kegs</option>
    </select>

    <ul>
      <li [class]="priceColor(currentKeg)" *ngFor="let currentKeg of childKegList | volume:filterByVolume">{{currentKeg.name}}, {{currentKeg.brand}}, $ {{currentKeg.price}}/pint, {{currentKeg.flavor}}, {{currentKeg.kegAmount}} pints available <button (click)="consumeButtonHasBeenClicked(currentKeg)">Consume a pint</button> <button (click)="editButtonHasBeenClicked(currentKeg)">Edit keg</button> </li>
    </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  filterByVolume: string = "allKegs";

  priceColor(currentKeg){
    if (currentKeg.price > 5){
      return "bg-danger;"
    } else if (currentKeg.price <=5 && currentKeg.price > 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  onChange(optionFromMenu) {
    this.filterByVolume = optionFromMenu;
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  consumeButtonHasBeenClicked(kegToConsume: Keg) {
    if (kegToConsume.kegAmount > 0) {
      kegToConsume.kegAmount -=1;
    } else {
      alert('Keg is empty. Can not consume. ');
    }
  }
}
